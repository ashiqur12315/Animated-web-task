import { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const text = "READY TO RISE AT SEVEN?";

export const KineticText = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ["start end", "end start"],
  });

  const lettersRef = useRef([]);

  // FULL TEXT MOVEMENT
  const x = useTransform(scrollYProgress, [0, 1], [window.innerWidth, -1000]);

  useEffect(() => {
    const animate = () => {
      const bumperX = window.innerWidth * 0.95;

      lettersRef.current.forEach((letter) => {
        if (!letter) return;

        const rect = letter.getBoundingClientRect();

        const center = rect.left + rect.width / 2;

        const distance = Math.abs(center - bumperX);

        // ACTIVE AREA AROUND BUMPER
        const threshold = 120;

        let lift = 0;

        if (distance < threshold) {
          const progress = 1 - distance / threshold;

          lift = progress * 100;
        }

        letter.style.transform = `translateY(${-lift}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        overflow-hidden flex
        min-h-[70vh]
        bg-[#f3f3f0]
        relative items-center
      "
    >
      {/* INVISIBLE BUMPER */}
      <div
        className="
          z-50
          w-20 h-20
          rounded-full
          pointer-events-none
          absolute right-[18%] top-1/2 -translate-y-1/2
        "
      />

      {/* TEXT */}
      <motion.div
        style={{
          x,
        }}
        className="
          flex
          whitespace-nowrap
        "
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="
              inline-block
              text-black text-[22vw] font-bold tracking-[-0.08em] leading-none
              will-change-transform
              lg:text-[13vw]
            "
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default KineticText;
