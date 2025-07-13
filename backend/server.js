require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cron = require('node-cron');
const xlsx = require('xlsx');

const Data = require('./models/Data');
const { storage } = require('./utils/cloudinary');
const upload = multer({ storage });

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/data/field/:fieldName', async (req, res) => {
  const field = req.params.fieldName;
  try {
    const data = await Data.find({}, { [field]: 1, _id: 0 });
    res.json(data.map(d => d[field]));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/upload/:id', upload.single('image'), async (req, res) => {
  try {
    const id = req.params.id;
    const imageUrl = req.file.path;

    const updatedData = await Data.findByIdAndUpdate(
      id,
      { image: imageUrl },
      { new: true }
    );

    res.json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/health', (req, res) => {
  res.send('Backend is running');
});

cron.schedule('0 * * * *', async () => {
  console.log('Running Excel to MongoDB sync...');

  try {
    const workbook = xlsx.readFile('data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    await Data.deleteMany({});
    await Data.insertMany(jsonData);

    console.log('Excel data synced to MongoDB successfully.');
  } catch (err) {
    console.log('Error syncing Excel to MongoDB:', err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));