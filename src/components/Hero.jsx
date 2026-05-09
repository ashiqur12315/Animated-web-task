import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const images = [
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://images.unsplash.com/photo-1516849841032-87cbac4d88f",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
];

export const Hero = ({ menuOpen }) => {
  const headingRef = useRef(null);

  const randomImage = useMemo(() => {
    return images[// Math.floor(Math.random() * images.length)
    0];
  }, []);

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
        ${menuOpen ? "blur-md scale-[0.98]" : ""}
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
          blur-3xl
          opacity-60
        "
      />

      <div className="absolute inset-0 bg-black/50" />

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
        <p className="uppercase tracking-[0.3em] text-sm mb-10">
          #1 Most Recommended Content Marketing Agency
        </p>

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
