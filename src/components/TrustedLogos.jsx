import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

import { useRef } from "react";

import logo1 from "../assets/logos/l1.svg";
import logo2 from "../assets/logos/l2.svg";
import logo3 from "../assets/logos/l3.svg";
import logo4 from "../assets/logos/l4.svg";

const logos = [logo1, logo2, logo3, logo4];

export const TrustedLogos = () => {
  const x = useMotionValue(0);

  const direction = useRef(-1);

  useAnimationFrame((t, delta) => {
    x.set(x.get() + delta * 0.03 * direction.current);

    if (x.get() < -10000) {
      x.set(0);
    }

    if (x.get() > 0) {
      x.set(-10000);
    }
  });

  return (
    <section
      className="
  relative
  py-14
  overflow-hidden
  border-y
"
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: -1000,
          right: 0,
        }}
        onDrag={(_, info) => {
          direction.current = info.delta.x > 0 ? 1 : -1;
        }}
        style={{ x }}
        className="
          flex
          items-center
          gap-50
          cursor-grab
          active:cursor-grabbing
          w-max
          text-white
        "
      >
        {Array(10)
          .fill(logos)
          .flat()
          .map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Logo"
              className="
        h-10
        w-auto
        object-contain
        opacity-80
        shrink-0
      "
            />
          ))}
      </motion.div>
    </section>
  );
};

export default TrustedLogos;
