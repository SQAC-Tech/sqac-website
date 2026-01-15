import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion, AnimatePresence } from "framer-motion";
import LogoSQAC from "../../assets/LogoSQAC.png";
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
      className={`relative rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 hover:shadow-lg transition-shadow duration-300 ${containerClassName || ""}`}
    >
      <Component
        className={`relative rounded-full bg-white dark:bg-zinc-900 text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2 font-semibold select-none ${className || ""}`} // 🌙
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

  const isFormValid =
    Object.values(formData).every((val) => val.trim() !== "") &&
    /^[0-9]{10}$/.test(formData.mobileNumber) &&
    /^RA\d{13}$/.test(formData.raNumber);

  return (
    <div
      className="
        flex justify-center items-center min-h-screen px-10
        bg-gradient-to-t from-cyan-200 via-purple-200 to-pink-200
        dark:bg-gradient-to-b dark:from-[#0f0a1a] dark:via-[#1b0b2e] dark:to-zinc-800
      " // 🌙
    >
      <div className="flex-1 flex justify-center">
        <div className="p-[3px] rounded-[28px] bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 shadow-2xl">
          <div className="rounded-[25px] bg-white dark:bg-zinc-900 w-full h-full"> {/* 🌙 */}
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

              {/* FRONT */}
              <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg"> {/* 🌙 */}
                <img src={LogoSQAC} alt="SQAC Logo" className="w-15 h-15 mb-4" />
                <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-6">SQAC</h1>

                {[
                  ["cardholderName", "Cardholder Name"],
                  ["raNumber", "Registration Number"],
                  ["srmMailId", "SRM Mail ID"],
                  ["department", "Department"],
                ].map(([name, placeholder]) => (
                  <input
                    key={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField("")}
                    placeholder={placeholder}
                    className="w-full mb-4 px-4 py-2 border rounded-xl shadow-sm bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400" // 🌙
                  />
                ))}

                <HoverBorderGradient onClick={handleFlip}>Flip →</HoverBorderGradient>
              </div>

              {/* BACK */}
              <div className="relative w-[380px] h-[540px] rounded-3xl shadow-2xl p-6 flex flex-col items-center border bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg"> {/* 🌙 */}
                <img src={LogoSQAC} alt="SQAC Logo" className="w-15 h-15 mb-4" />
                <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-6">SQAC</h1>

                <h2 className="text-center font-bold text-gray-700 dark:text-gray-300 mb-4"> {/* 🌙 */}
                  Click Submit button to submit the form
                </h2>

                <div className="flex justify-between w-full mt-auto gap-3">
                  <HoverBorderGradient onClick={handleFlip}>← Flip Back</HoverBorderGradient>
                  <HoverBorderGradient disabled={!isFormValid}>Submit</HoverBorderGradient>
                </div>
              </div>

            </ReactCardFlip>
          </div>
        </div>
      </div>

      {/* SIDE TEXT */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={focusedField || "default"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center max-w-md"
          >
            <p className="text-4xl font-bold text-gray-700 dark:text-gray-200"> {/* 🌙 */}
              {focusedField ? messages[focusedField] : messages.default}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IDCardForm;
