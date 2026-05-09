import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import hero1 from "../assets/images/b1.png";
import hero2 from "../assets/images/b2.png";
import hero3 from "../assets/images/b3.png";

import heroLogo1 from "../assets/images/bl1.png";
import heroLogo2 from "../assets/images/bl2.png";
import heroLogo3 from "../assets/images/bl3.png";
import heroLogo4 from "../assets/images/bl4.png";

const images = [hero1, hero2, hero3];
const logos = [heroLogo1, heroLogo2, heroLogo3, heroLogo4];

export const Hero = ({ menuOpen }) => {
  const headingRef = useRef(null);

  const [randomImage] = useState(() => {
    return images[Math.floor(Math.random() * images.length)];
  });

  useEffect(() => {
    const split = new SplitType(headingRef.current, {
      types: "chars",
    });

    gsap.from(split.chars, {
      y: 120,
      opacity: 0,
      stagger: 0.03,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section
      className={`
        relative
        min-h-screen
        overflow-hidden
        transition-all
        duration-500
        mx-2
        my-2
        rounded-3xl
        bg-white
        ${menuOpen ? "blur-sm mx-0 my-0" : ""}
      `}
    >
      <img
        src={randomImage}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-110
          blur-lg
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          min-h-screen
          text-center
          px-6
        "
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-5">
          #1 Most Recommended <br /> Content Marketing Agency
        </p>
        <div className="flex gap-1 space-x-2 mb-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="
                inline-block
                h-8
                w-auto
                object-contain
                "
            />
          ))}
        </div>

        <h1
          ref={headingRef}
          className="
            text-[18vw]
            lg:text-[10vw]
            font-bold
            leading-[0.9]
            tracking-[-0.05em]
          "
        >
          We Create
          <br />
          Category{" "}
          <img
            src={randomImage}
            className="
              inline-block
              w-24
              h-24
              lg:w-40
              lg:h-40
              object-cover
              rounded-3xl
              align-middle
            "
          />{" "}
          Leaders
        </h1>

        <p className="mt-10 text-2xl">on every searchable platform</p>
      </div>
    </section>
  );
};

export default Hero;
