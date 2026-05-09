import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "../assets/images/b1.png";
import work2 from "../assets/images/b2.png";
import work3 from "../assets/images/b3.png";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "SIXT",
    description: "Premium car rental growth campaign",
    image: work1,
    bg: "#dfeee8",
  },

  {
    title: "Dojo - B2B",
    description: "A B2B success story for Dojo card machines",
    image: work2,
    bg: "#efd3c3",
  },

  {
    title: "Magnet Trade",
    description: "Leading E Sim brand globally",
    image: work3,
    bg: "#d8d8d8",
  },
];

export const FeaturedWork = () => {
  const sectionRef = useRef(null);

  const cardsContainerRef = useRef(null);

  const titlesRef = useRef([]);

  const [isScrolling, setIsScrolling] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // PIN SECTION
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3500",
        pin: true,
        scrub: true,
      });

      // INTERNAL SCROLL
      gsap.to(cardsContainerRef.current, {
        y: () => {
          return -(
            cardsContainerRef.current.scrollHeight -
            window.innerHeight +
            200
          );
        },

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: true,

          onUpdate: (self) => {
            setIsScrolling(true);

            clearTimeout(window.scrollEndTimer);

            window.scrollEndTimer = setTimeout(() => {
              setIsScrolling(false);
            }, 120);

            // ACTIVE TITLE
            const progress = self.progress;

            const activeIndex = Math.min(
              works.length - 1,
              Math.floor(progress * works.length),
            );

            titlesRef.current.forEach((title, index) => {
              gsap.to(title, {
                opacity: index === activeIndex ? 1 : 0.2,

                duration: 0.3,
              });
            });
          },
        },
      });
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
        bg-black
        text-white
        rounded-[40px]
        mx-2
        mt-32
      "
    >
      {/* CUSTOM CURSOR */}
      {hovered && !isScrolling && (
        <div
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
          className="
            fixed
            z-[9999]
            w-20
            h-20
            rounded-full
            bg-[#c7f5e7]
            text-black
            flex
            items-center
            justify-center
            text-4xl
            pointer-events-none
          "
        >
          ↗
        </div>
      )}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[40%_60%]
          h-full
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            flex-col
            justify-center
            px-6
            lg:px-14
            relative
            z-20
          "
        >
          <p
            className="
              text-lg
              mb-14
              text-white/60
            "
          >
            Featured Work
          </p>

          <div className="space-y-5">
            {works.map((work, index) => (
              <h2
                key={work.title}
                ref={(el) => (titlesRef.current[index] = el)}
                className="
                  text-[12vw]
                  lg:text-[5vw]
                  leading-[0.9]
                  font-bold
                  tracking-[-0.06em]
                  opacity-20
                "
              >
                {work.title}
              </h2>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            relative
            h-screen
            overflow-hidden
            flex
            items-center
            justify-center
            pr-8
          "
        >
          <div
            ref={cardsContainerRef}
            className="
              flex
              flex-col
              gap-6
              pt-[110vh]
pb-[30vh]
            "
          >
            {works.map((work) => (
              <div
                key={work.title}
                onMouseMove={(e) =>
                  setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="
                  relative
                  w-full
                  max-w-[720px]
                  h-[75vh]
                  rounded-[32px]
                  overflow-hidden
                  group
                  cursor-none
                "
              >
                {/* IMAGE */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div
                  style={{
                    background: work.bg,
                  }}
                  className={`
                    absolute
                    inset-0
                    p-10
                    flex
                    flex-col
                    justify-end
                    text-black
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.76,0,0.24,1)]
                    ${
                      isScrolling
                        ? "translate-y-full"
                        : "translate-y-full group-hover:translate-y-0"
                    }
                  `}
                >
                  <h3
                    className="
                      text-4xl
                      lg:text-5xl
                      font-bold
                      leading-[0.95]
                      tracking-[-0.05em]
                      max-w-xl
                    "
                  >
                    {work.description}
                  </h3>

                  <div
                    className="
                      mt-10
                      w-24
                      h-24
                      rounded-full
                      bg-[#b7f3df]
                      flex
                      items-center
                      justify-center
                      text-4xl
                    "
                  >
                    ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
