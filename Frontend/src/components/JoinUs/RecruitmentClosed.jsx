import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BODY_PATH, DIAMOND_PATH } from "./NaturalLanguageForm";
import "./naturalLanguageForm.css";
import "./recruitmentClosed.css";

const INSTAGRAM_URL = "https://www.instagram.com/sqac.srmist/";
const LINKEDIN_URL = "https://www.linkedin.com/company/sqacsrm/posts/?feedView=all";
const CLUB_EMAIL = "sqac.club@gmail.com";

// sealed → opening (seal cracks, flap swings) → rising (letter slides out) → open (letter unfolds)
const OPENING_MS = 650;
const RISING_MS = 900;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ─── SQAC logo mark ────────────────────────────────────────────── */
const LogoMark = ({ className, fill }) => (
  <svg className={className} viewBox="0 0 430 490" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d={BODY_PATH} fill={fill} />
    <path d={DIAMOND_PATH} fill={fill} stroke={fill} strokeWidth="12" strokeLinejoin="round" />
  </svg>
);

/* ─── Wax seal — rendered as two halves so it can crack apart ───── */
const WaxSeal = ({ broken }) => (
  <div className="rc-seal" aria-hidden="true">
    {["left", "right"].map((side) => (
      <motion.div
        key={side}
        className={`rc-seal-half rc-seal-${side}`}
        animate={
          broken
            ? { x: side === "left" ? -26 : 26, y: 60, rotate: side === "left" ? -35 : 35, opacity: 0 }
            : { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 0.55, ease: [0.4, 0, 0.6, 1] }}
      >
        <div className="rc-seal-wax">
          <LogoMark className="rc-seal-logo" fill="rgba(255, 214, 140, 0.85)" />
        </div>
      </motion.div>
    ))}
  </div>
);

/* ─── Full letter ───────────────────────────────────────────────── */
const Letter = ({ onReseal }) => (
  <motion.article layoutId="rc-letter" className="rc-paper rc-letter" transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.5 }}
    >
      <div className="rc-letter-head">
        <span className="rc-letter-tag">SQAC Recruitment 2026</span>
        <LogoMark className="rc-letter-logo" fill="#7A1E2C" />
      </div>

      <h1 className="rc-letter-title">
        Recruitments are <span>over</span>.
      </h1>

      <p className="rc-letter-body">
        Thank you to everyone who applied. Our application portal is now closed,
        but this isn&apos;t goodbye.
      </p>
      <p className="rc-letter-body">
        Stay notified for when our recruitments open again. Follow us on Instagram and
        LinkedIn to hear first whenever we have an event or are recruiting.
      </p>

      <div className="rc-letter-actions">
        <a className="rc-btn rc-btn-solid" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a className="rc-btn rc-btn-solid" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      <p className="rc-letter-body rc-letter-mail">
        For further queries, mail us at{" "}
        <a href={`mailto:${CLUB_EMAIL}`}>
          <FaEnvelope /> {CLUB_EMAIL}
        </a>
      </p>

      <div className="rc-letter-foot">
        <span className="rc-letter-sign">— Team SQAC</span>
        <button type="button" className="rc-reseal" onClick={onReseal}>
          ↺ Seal it again
        </button>
      </div>
    </motion.div>
  </motion.article>
);

/* ─── Recruitment Closed Page ───────────────────────────────────── */
const RecruitmentClosed = () => {
  const [stage, setStage] = useState(() => (prefersReducedMotion() ? "open" : "sealed"));
  const timers = useRef([]);

  // 3D tilt that follows the cursor while the envelope is sealed
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = () => {
    if (stage !== "sealed") return;
    mx.set(0);
    my.set(0);
    setStage("opening");
    timers.current = [
      setTimeout(() => setStage("rising"), OPENING_MS),
      setTimeout(() => setStage("open"), OPENING_MS + RISING_MS),
    ];
  };

  const reseal = () => setStage("sealed");

  const handleMove = (e) => {
    if (stage !== "sealed") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const flapOpen = stage !== "sealed";
  const letterOut = stage === "rising";

  return (
    <div className="nlf-page rc-page">
      <div className="nlf-blob nlf-blob-1" />
      <div className="nlf-blob nlf-blob-2" />

      <div className="rc-scene">
        <AnimatePresence>
          {stage !== "open" && (
            <motion.div
              key="envelope"
              className="rc-envelope-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 140, scale: 0.9, transition: { duration: 0.6 } }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={`rc-envelope ${stage === "sealed" ? "rc-sealed" : ""}`}
                style={{ rotateX, rotateY }}
                onMouseMove={handleMove}
                onMouseLeave={() => { mx.set(0); my.set(0); }}
                onClick={open}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), open())}
                role="button"
                tabIndex={0}
                aria-label="Open the letter from SQAC"
              >
                <div className="rc-back" />

                {/* Letter peeking out of the envelope */}
                <motion.div
                  layoutId="rc-letter"
                  className="rc-paper rc-peek"
                  animate={{ y: letterOut ? "-48%" : "0%" }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="rc-letter-tag">SQAC Recruitment 2026</span>
                  <p className="rc-peek-title">Recruitments are <span>over</span>.</p>
                </motion.div>

                <div className="rc-front" />

                <motion.div
                  className="rc-flap"
                  style={{ zIndex: letterOut ? 1 : 4, transformPerspective: 800 }}
                  animate={{ rotateX: flapOpen ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: flapOpen ? 0.15 : 0 }}
                />

                <WaxSeal broken={flapOpen} />
              </motion.div>

              <motion.p
                className="rc-hint"
                animate={{ opacity: stage === "sealed" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                A letter for you · tap the seal to open
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {stage === "open" && <Letter onReseal={reseal} />}
      </div>
    </div>
  );
};

export default RecruitmentClosed;
