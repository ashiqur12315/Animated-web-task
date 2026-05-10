import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

import { useEffect, useRef } from "react";

import image1 from "../assets/images/b1.png";
import image2 from "../assets/images/b2.png";

const items = [
  {
    text: "Not Algorithms",
    image: image1,
  },

  {
    text: "Change",
    image: image2,
  },
];

export const MovingText = () => {
  const x = useMotionValue(0);

  const direction = useRef(-1);

  const speed = useRef(1.2);

  const lastScrollY = useRef(0);

  // DETECT SCROLL DIRECTION
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // DIRECTION
      direction.current = currentScroll > lastScrollY.current ? -1 : 1;

      lastScrollY.current = currentScroll;

      // BOOST SPEED
      speed.current = 1.8;

      clearTimeout(window.scrollTimer);

      window.scrollTimer = setTimeout(() => {
        speed.current = 1.2;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CONTINUOUS MARQUEE
  useAnimationFrame((t, delta) => {
    let moveBy = delta * 0.03 * speed.current * direction.current;

    x.set(x.get() + moveBy);

    // INFINITE LOOP
    if (x.get() < -3000) {
      x.set(0);
    }

    if (x.get() > 0) {
      x.set(-3000);
    }
  });

  return (
    <section
      className="
        overflow-hidden
        py-24
        bg-[#f3f3f0]
      "
    >
      <motion.div
        style={{ x }}
        className="
          flex
          items-center
          gap-20
          w-max
          whitespace-nowrap
        "
      >
        {[...items, ...items, ...items, ...items, ...items].map(
          (item, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              gap-10
              shrink-0
            "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="
  w-64
  h-64
  rounded-[40px]
  object-cover
  shrink-0
"
              />

              {/* TEXT */}
              <h2
                className="
                text-[9vw]
                lg:text-[10vw]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-black
              "
              >
                {item.text}
              </h2>
            </div>
          ),
        )}
      </motion.div>
    </section>
  );
};

export default MovingText;
