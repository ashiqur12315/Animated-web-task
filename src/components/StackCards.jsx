import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cardImage1 from "../assets/images/b1.png";
import cardImage2 from "../assets/images/b2.png";
import cardImage3 from "../assets/images/b3.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Pioneers",
    description:
      "We're dedicated to creating the industry narrative that others follow.",
    image: cardImage1,
    bg: "#000000",
    textColor: "#ffffff",
    rotate: 7,
  },

  {
    title: "Award Winning",
    description: "A roll top bath full of 79 awards and global recognition.",
    image: cardImage2,
    bg: "#b8f1e0",
    textColor: "#000000",
    rotate: 10,
  },

  {
    title: "Speed",
    description:
      "We’ve created a service that takes ideas to result within 60 minutes.",
    image: cardImage3,
    bg: "#f5f5f5",
    textColor: "#000000",
    rotate: 13,
  },
];

export const StackedCards = () => {
  const sectionRef = useRef(null);

  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(cardsRef.current[0], {
        y: -1200,
        rotation: -20,
        ease: "none",
        duration: 1.2,
      });

      tl.to(
        cardsRef.current[1],
        {
          y: -1200,
          rotation: -20,
          ease: "none",
          duration: 1.2,
        },

        "-=0.55",
      );

      tl.to(
        cardsRef.current[2],
        {
          rotation: 0,
          ease: "none",
          duration: 1,
        },

        "-=0.2",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#f3f3f0]
        mt-40
      "
    >
      {/* TITLE */}
      <div
        className="
          absolute
          top-12
          left-1/2
          -translate-x-1/2
          z-50
        "
      >
        <p
          className="
            text-xl
            text-black
            font-medium
          "
        >
          Legacy In The Making
        </p>
      </div>

      {/* STACK */}
      <div
        className="
          relative
          w-full
          h-full
          flex
          items-center
          justify-center
        "
      >
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{
              background: card.bg,
              color: card.textColor,
              zIndex: cards.length - index,
              transform: `translateY(${index * 20}px) rotate(${card.rotate}deg)`,
            }}
            className="
              absolute
              w-[80vw]
lg:w-[36vw]
h-[62vh]
              rounded-[40px]
              shadow-xl
              px-10
              py-12
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* IMAGE */}
            <img
              src={card.image}
              alt=""
              className="
                w-44
                h-44
                rounded-[30px]
                object-cover
                mb-10
              "
            />

            {/* TITLE */}
            <h2
              className="
                text-[12vw]
                lg:text-[4vw]
                font-bold
                tracking-[-0.06em]
                leading-none
              "
            >
              {card.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                lg:text-lg
                leading-relaxed
                opacity-80
              "
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackedCards;
