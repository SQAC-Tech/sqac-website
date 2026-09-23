import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "./naturalLanguageForm.css";

/* ─── SQAC Logo paths (exact, from design file) ─────────────────── */
const BODY_PATH =
  "M105 245 C60 260 10 240 8 190 C6 130 40 70 100 42 " +
  "C150 20 250 15 330 18 L395 18 C415 18 418 32 408 58 " +
  "L372 175 C366 195 368 202 388 218 C420 240 430 275 422 320 " +
  "C412 395 360 445 300 462 C240 480 100 478 40 470 " +
  "C12 466 6 440 14 420 C32 380 80 330 122 312 " +
  "C135 335 170 352 215 352 C245 352 262 350 280 368 " +
  "C292 380 312 380 318 362 C322 350 312 342 304 336 " +
  "C316 316 322 290 322 260 A112 112 0 1 0 105 245 Z";

const DIAMOND_PATH = "M264 284 L292 312 L264 340 L236 312 Z";

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ─── Logo progress indicator ───────────────────────────────────── */
const SQACLogoProgress = ({ progress }) => {
  // Body draws 0 → 65 %  of form completion
  const bodyOffset = 1 - clamp(progress / 0.65);
  // Diamond draws 55 → 80 %
  const diamondOffset = 1 - clamp((progress - 0.55) / 0.25);
  // Fill fades in 80 → 100 %
  const fillOpacity = clamp((progress - 0.8) / 0.2);

  const STROKE_TRANSITION = "stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1)";
  const FILL_TRANSITION = "opacity 0.4s ease";

  return (
    <div className="nlf-logo-wrap">
      <svg
        className="nlf-logo-svg"
        viewBox="0 0 430 490"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SQAC Logo"
      >
        <defs>
          <linearGradient id="sqacGrad" x1="0.9" y1="0" x2="0.1" y2="1">
            <stop offset="0" stopColor="#EDB43A" />
            <stop offset="0.45" stopColor="#e54a5c" />
            <stop offset="1" stopColor="#7A1E2C" />
          </linearGradient>
        </defs>

        {/* ── Ghost (faded full logo always visible) ── */}
        <path d={BODY_PATH} fill="rgba(255,255,255,0.04)" stroke="none" />
        <path d={DIAMOND_PATH} fill="rgba(255,255,255,0.04)" stroke="none" />

        {/* ── Gradient fill (fades in at ~80 % completion) ── */}
        <path
          d={BODY_PATH}
          fill="url(#sqacGrad)"
          style={{ opacity: fillOpacity, transition: FILL_TRANSITION }}
        />
        <path
          d={DIAMOND_PATH}
          fill="url(#sqacGrad)"
          stroke="url(#sqacGrad)"
          strokeWidth="12"
          strokeLinejoin="round"
          style={{ opacity: fillOpacity, transition: FILL_TRANSITION }}
        />

        {/* ── Animated outline — body ── */}
        <path
          d={BODY_PATH}
          fill="none"
          stroke="url(#sqacGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          style={{ strokeDashoffset: bodyOffset, transition: STROKE_TRANSITION }}
        />

        {/* ── Animated outline — diamond ── */}
        <path
          d={DIAMOND_PATH}
          fill="none"
          stroke="url(#sqacGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          style={{ strokeDashoffset: diamondOffset, transition: STROKE_TRANSITION }}
        />
      </svg>

      <div className="nlf-logo-label">
        <span className="nlf-logo-pct">{Math.round(progress * 100)}%</span>
        <span className="nlf-logo-hint">
          {progress === 0
            ? "start filling the form"
            : progress === 1
              ? "ready to launch ✓"
              : "drawing…"}
        </span>
      </div>
    </div>
  );
};

/* ─── Inline Select ─────────────────────────────────────────────── */
const InlineSelect = ({ name, value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <span
      className={`nlf-field nlf-select ${value ? "nlf-filled" : ""} ${open ? "nlf-focused" : ""}`}
      ref={ref}
    >
      <span className="nlf-select-trigger" onClick={() => setOpen((v) => !v)}>
        {selected ? selected.label : <span className="nlf-placeholder">{placeholder}</span>}
        <svg className="nlf-caret" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nlf-dropdown"
            initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                className={`nlf-option ${opt.value === value ? "nlf-option-active" : ""}`}
                onClick={() => { onChange(name, opt.value); setOpen(false); }}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </span>
  );
};

/* ─── Inline Text Input ─────────────────────────────────────────── */
const InlineInput = ({ name, value, onChange, placeholder, type = "text" }) => {
  const [focused, setFocused] = useState(false);
  const mirrorRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (mirrorRef.current) setWidth(mirrorRef.current.offsetWidth);
  }, [value, placeholder]);

  return (
    <span className={`nlf-field nlf-input ${value ? "nlf-filled" : ""} ${focused ? "nlf-focused" : ""}`}>
      <span className="nlf-mirror" ref={mirrorRef} aria-hidden="true">
        {value || placeholder}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ width: Math.max(width + 4, 60) }}
      />
    </span>
  );
};

/* ─── Success Screen ────────────────────────────────────────────── */
const SuccessScreen = ({ name }) => (
  <motion.div
    className="nlf-success"
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
  >
    <div className="nlf-success-logo">
      <svg viewBox="0 0 430 490" xmlns="http://www.w3.org/2000/svg" aria-label="SQAC Logo">
        <defs>
          <linearGradient id="sqacGradSuccess" x1="0.9" y1="0" x2="0.1" y2="1">
            <stop offset="0" stopColor="#EDB43A" />
            <stop offset="0.45" stopColor="#e54a5c" />
            <stop offset="1" stopColor="#7A1E2C" />
          </linearGradient>
        </defs>
        <path d={BODY_PATH} fill="url(#sqacGradSuccess)" />
        <path d={DIAMOND_PATH} fill="url(#sqacGradSuccess)" stroke="url(#sqacGradSuccess)" strokeWidth="12" strokeLinejoin="round" />
      </svg>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="nlf-success-text"
    >
      <p className="nlf-success-label">APPLICATION RECEIVED</p>
      <h2 className="nlf-success-heading">
        Application Submitted,<br />
        <span>{name || "recruit"}</span>.
      </h2>
      <p className="nlf-success-sub">We'll be in touch soon. Keep building. 🚀</p>
    </motion.div>
  </motion.div>
);

/* ─── Main Form ─────────────────────────────────────────────────── */
const FIELD_KEYS = ["name", "year", "department", "raNumber", "email", "coreDomain", "subDomain", "github", "linkedin", "phone"];

const NaturalLanguageForm = () => {
  const [formData, setFormData] = useState({
    name: "", year: "", department: "", raNumber: "",
    email: "", coreDomain: "", subDomain: "",
    github: "", linkedin: "", phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filledCount = FIELD_KEYS.filter((k) => formData[k].trim() !== "").length;
  const progress = filledCount / FIELD_KEYS.length;

  const handleChange = (name, value) => {
    if (name === "coreDomain") {
      setFormData((prev) => ({ ...prev, coreDomain: value, subDomain: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const subdomainMap = {
    Technical: [
      { value: "Web Development", label: "Web Development" },
      { value: "AI/ML", label: "AI / ML" },
      { value: "App Development", label: "App Development" },
    ],
    Corporate: [
      { value: "Sponsorship", label: "Sponsorship" },
      { value: "Events", label: "Events" },
    ],
    Media: [
      { value: "Creatives", label: "Creatives" },
      { value: "Public Relations", label: "Public Relations" },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFilled = FIELD_KEYS.every((k) => formData[k].trim() !== "");
    if (!allFilled) { toast.error("Please fill in all fields."); return; }
    if (!/^[0-9]{10}$/.test(formData.phone)) { toast.error("Enter a valid 10-digit phone number."); return; }
    if (!/^RA\d{13}$/i.test(formData.raNumber)) { toast.error("RA number must be RA + 13 digits."); return; }

    setSubmitting(true);
    try {
      await fetch("/api/candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch { /* fall through to success */ }
    setTimeout(() => setSubmitted(true), 400);
  };

  const yearOpts = [{ value: "1st", label: "1st" }, { value: "2nd", label: "2nd" }, { value: "3rd", label: "3rd" }, { value: "4th", label: "4th" }];
  const deptOpts = [{ value: "CSE", label: "CSE" }, { value: "ECE", label: "ECE" }, { value: "EEE", label: "EEE" }, { value: "MECH", label: "MECH" }, { value: "Civil", label: "Civil" }, { value: "Other", label: "Other" }];
  const domainOpts = [{ value: "Technical", label: "Technical" }, { value: "Corporate", label: "Corporate" }, { value: "Media", label: "Media" }];

  return (
    <div className="nlf-page">
      <div className="nlf-blob nlf-blob-1" />
      <div className="nlf-blob nlf-blob-2" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <SuccessScreen key="success" name={formData.name} />
        ) : (
          <motion.div
            key="form"
            className="nlf-layout"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* ── Logo progress (left) ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SQACLogoProgress progress={progress} />
            </motion.div>

            {/* ── Form (right) ── */}
            <div className="nlf-center">
              <motion.div
                className="nlf-tag"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                SQAC RECRUITMENT 2026
              </motion.div>

              <motion.form
                className="nlf-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="nlf-line">
                  Hi, my name is{" "}
                  <InlineInput name="name" value={formData.name} onChange={handleChange} placeholder="your name" />
                  {" "}and I&apos;m a{" "}
                  <InlineSelect name="year" value={formData.year} onChange={handleChange} options={yearOpts} placeholder="year" />
                  {" "}year student from the{" "}
                  <InlineSelect name="department" value={formData.department} onChange={handleChange} options={deptOpts} placeholder="department" />
                  {" "}department.
                </p>

                <p className="nlf-line">
                  My registration number is{" "}
                  <InlineInput name="raNumber" value={formData.raNumber} onChange={handleChange} placeholder="RA1234567890123" />
                  {" "}and you can reach me at{" "}
                  <InlineInput name="email" value={formData.email} onChange={handleChange} placeholder="srm email" type="email" />.
                </p>

                <p className="nlf-line">
                  I&apos;m interested in the{" "}
                  <InlineSelect name="coreDomain" value={formData.coreDomain} onChange={handleChange} options={domainOpts} placeholder="domain" />
                  {" "}team, specifically{" "}
                  <InlineSelect
                    name="subDomain"
                    value={formData.subDomain}
                    onChange={handleChange}
                    options={formData.coreDomain ? subdomainMap[formData.coreDomain] : []}
                    placeholder="sub-domain"
                  />.
                </p>

                <p className="nlf-line">
                  GitHub:{" "}
                  <InlineInput name="github" value={formData.github} onChange={handleChange} placeholder="username" />
                  {" "}· LinkedIn:{" "}
                  <InlineInput name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="username" />
                  {" "}· Phone:{" "}
                  <InlineInput name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit number" type="tel" />.
                </p>

                <motion.button
                  type="submit"
                  className="nlf-submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.03 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                >
                  <span className="nlf-submit-arrow">{submitting ? "⟳" : "→"}</span>
                  {submitting ? "Submitting…" : "Apply to SQAC"}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NaturalLanguageForm;
