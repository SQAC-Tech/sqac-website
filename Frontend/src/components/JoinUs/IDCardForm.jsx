import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion, AnimatePresence } from "framer-motion";

const IDCardForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [focusedField, setFocusedField] = useState(""); // Track which input is active

  const [formData, setFormData] = useState({
    cardholderName: "",
    year: "",
    gender: "",
    batch: "",
    raNumber: "",
    srmMailId: "",
    department: "",
    coreDomain: "",
    subDomain: "",
    mobileNumber: "",
    githubId: "",
    linkedinId: "",
  });

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subdomainOptions = {
    Technical: ["Web Development", "AI/ML", "App Development"],
    Corporate: ["Sponsorship", "Events", "Media"],
  };

  const messages = {
    default: "🚀 Let the journey begin with SQAC!",
    cardholderName: " Enter your full name as it will appear on the ID card.",
    year: "Choose your current year of study.",
    gender: "Select your gender identity.",
    batch: " Pick your recruitment batch.",
    raNumber: " Provide your official registration number.",
    srmMailId: " Enter your SRMIST email ID.",
    department: " Mention your department of study.",
    coreDomain: " Select your core interest domain.",
    subDomain: " Choose a subdomain within your domain.",
    mobileNumber: " Provide your mobile number for contact.",
    githubId: " Share your GitHub profile link.",
    linkedinId: " Add your LinkedIn profile link.",
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://recruitement-demo.onrender.com/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form Submitted Successfully!");
        setFormData({
          cardholderName: "",
          year: "",
          gender: "",
          batch: "",
          raNumber: "",
          srmMailId: "",
          department: "",
          coreDomain: "",
          subDomain: "",
          mobileNumber: "",
          githubId: "",
          linkedinId: "",
        });
        setIsFlipped(false);
      } else {
        alert("Failed to Submit Form. Try again!");
      }
    } catch (error) {
      console.error(error);
      alert("Internal Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-10 bg-gradient-to-br from-cyan-200 via-purple-200 to-pink-200">
      {/* Left Side - Card */}
      <div className="flex-1 flex justify-center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front Side */}
          <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border border-purple-300 bg-white/70 backdrop-blur-lg">
            <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
            <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mt-4 mb-4 text-center">
              Software Quality Assurance Community
            </h2>

            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              onFocus={() => setFocusedField("cardholderName")}
              onBlur={() => setFocusedField("")}
              placeholder="Cardholder Name"
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <div className="flex w-full mb-4 gap-3">
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                onFocus={() => setFocusedField("year")}
                onBlur={() => setFocusedField("")}
                className="w-1/3 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Year</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
              </select>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                onFocus={() => setFocusedField("gender")}
                onBlur={() => setFocusedField("")}
                className="w-1/3 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                onFocus={() => setFocusedField("batch")}
                onBlur={() => setFocusedField("")}
                className="w-1/3 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Batch</option>
                <option value="1">Batch 1</option>
                <option value="2">Batch 2</option>
              </select>
            </div>

            <input
              type="text"
              name="raNumber"
              value={formData.raNumber}
              onChange={handleChange}
              onFocus={() => setFocusedField("raNumber")}
              onBlur={() => setFocusedField("")}
              placeholder="Registration Number"
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              name="srmMailId"
              value={formData.srmMailId}
              onChange={handleChange}
              onFocus={() => setFocusedField("srmMailId")}
              onBlur={() => setFocusedField("")}
              placeholder="SRM Mail ID"
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              onFocus={() => setFocusedField("department")}
              onBlur={() => setFocusedField("")}
              placeholder="Department"
              className="w-full mb-6 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              onClick={handleFlip}
              className="mt-5 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              Flip →
            </button>
          </div>

          {/* Back Side */}
          <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border border-purple-300 bg-white/70 backdrop-blur-lg">
            <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 mt-3 mb-4 text-center">
              Software Quality Assurance Community
            </h2>

            <select
              name="coreDomain"
              value={formData.coreDomain}
              onChange={handleChange}
              onFocus={() => setFocusedField("coreDomain")}
              onBlur={() => setFocusedField("")}
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Core Domain</option>
              <option value="Technical">Technical</option>
              <option value="Corporate">Corporate</option>
            </select>

            <select
              name="subDomain"
              value={formData.subDomain}
              onChange={handleChange}
              onFocus={() => setFocusedField("subDomain")}
              onBlur={() => setFocusedField("")}
              disabled={!formData.coreDomain}
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
            >
              <option value="">Select Subdomain</option>
              {formData.coreDomain &&
                subdomainOptions[formData.coreDomain].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>

            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              onFocus={() => setFocusedField("mobileNumber")}
              onBlur={() => setFocusedField("")}
              placeholder="Mobile No"
              className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <div className="flex w-full mb-4 gap-3">
              <input
                type="text"
                name="githubId"
                value={formData.githubId}
                onChange={handleChange}
                onFocus={() => setFocusedField("githubId")}
                onBlur={() => setFocusedField("")}
                placeholder="Github ID"
                className="w-1/2 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                name="linkedinId"
                value={formData.linkedinId}
                onChange={handleChange}
                onFocus={() => setFocusedField("linkedinId")}
                onBlur={() => setFocusedField("")}
                placeholder="LinkedIn ID"
                className="w-1/2 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Existing full-width button */}
            <button
              onClick={handleSubmit}
              className="w-full px-5 py-3 mb-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              Generate Recruitment ID
            </button>

            {/* New row: Flip Back + Submit */}
            <div className="flex justify-between w-full mt-auto gap-3">
              <button
                onClick={handleFlip}
                className="flex-1 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                ← Flip Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </div>
          </div>
        </ReactCardFlip>
      </div>

      {/* Right Side - Onboarding Text */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={focusedField || "default"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-md"
          >
            <p className="text-4xl font-bold text-gray-700">
              {focusedField ? messages[focusedField] : messages.default}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IDCardForm;
