import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion, AnimatePresence } from "framer-motion";
import LogoSQAC from "../../assets/LogoSQAC.png";
import { FaIdBadge } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HoverBorderGradient = ({
  children,
  className,
  containerClassName,
  as = "button",
  ...props
}) => {
  const Component = as;
  return (
    <div
      className={`relative rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 hover:shadow-lg transition-shadow duration-300 ${
        containerClassName || ""
      }`}
    >
      <Component
        className={`relative rounded-full bg-white text-black flex items-center justify-center space-x-2 px-6 py-2 font-semibold select-none ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

const IDCardForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [focusedField, setFocusedField] = useState("");
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

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
  try {
    const res = await fetch("https://recruitement-demo.onrender.com/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // parse JSON

    if (res.ok) {
      toast.success(data.message || "Form Submitted Successfully!");
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
      toast.error(data.error || "Failed to Submit Form. Try again!");
    }
  } catch (error) {
    console.error(error);
    toast.error("Internal Server error. Please try again later.");
  }
};


  // ✅ Validation logic
  const isFormValid =
    Object.values(formData).every((val) => val.trim() !== "") && /^[0-9]{10}$/.test(formData.mobileNumber);

  return (
    <div className="flex justify-center items-center min-h-screen px-10 bg-gradient-to-br from-cyan-200 via-purple-200 to-pink-200">
      <div className="flex-1 flex justify-center">
        <div className="p-[3px] rounded-[28px] bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 shadow-2xl">
          <div className="rounded-[25px] bg-white w-full h-full">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              {/* Front Side */}
              <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border bg-white/90 backdrop-blur-lg">
                <img
                  src={LogoSQAC}
                  alt="SQAC Logo"
                  className="w-15 h-15 mb-4"
                />
                <h1 className="text-3xl font-extrabold text-center text-[#a78bfa] mb-6">
                  SQAC
                </h1>
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
                <HoverBorderGradient as="button" onClick={handleFlip}>
                  <span className="cursor-pointer">Flip →</span>
                </HoverBorderGradient>
              </div>

              {/* Back Side */}
              <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border bg-white/90 backdrop-blur-lg">
                <img
                  src={LogoSQAC}
                  alt="SQAC Logo"
                  className="w-15 h-15 mb-4"
                />
                <h1 className="text-3xl font-extrabold text-center text-[#a78bfa] mb-6">
                  SQAC
                </h1>
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
                  className="w-full mb-1 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {/* Error message for invalid phone */}
                {formData.mobileNumber &&
                  !/^[0-9]{10}$/.test(formData.mobileNumber) && (
                    <p className="text-sm text-red-500 mb-3">
                      Enter a valid 10-digit phone number
                    </p>
                  )}
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

                <h2 className="text-center font-bold">
                  Click Submit button to submit the form
                </h2>

                <div className="flex justify-between w-full mt-auto gap-3">
                  <HoverBorderGradient
                    as="button"
                    onClick={handleFlip}
                    className="flex-1 cursor-pointer"
                  >
                    ← Flip Back
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    as="button"
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 cursor-pointer disabled:opacity-50"
                    disabled={!isFormValid}
                  >
                    Submit
                  </HoverBorderGradient>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>

      {/* Onboarding text */}
      <div className="flex-1 flex items-center justify-center hidden lg:flex">
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
