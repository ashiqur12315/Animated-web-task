import { useState } from "react";

import newsImage1 from "../assets/images/b1.png";
import newsImage2 from "../assets/images/b2.png";
import newsImage3 from "../assets/images/b3.png";

const posts = [
  {
    author: "Ray Saddiq",
    readTime: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    image: newsImage1,
    tag: "",
  },

  {
    author: "Ray Saddiq",
    readTime: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ",
    image: newsImage2,
    tag: "",
  },

  {
    author: "Carrie Rose",
    readTime: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: newsImage3,
    tag: "News",
  },
];

export const WhatsNew = () => {
  const [hovered, setHovered] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section
      className="
        px-5 py-24
        text-black!
        bg-[#f3f3f0]
        lg:px-10
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          pb-10 mb-10
          text-black
          border-b border-black/10
          items-center justify-between gap-10
        "
      >
        <div
          className="
            flex
            items-center gap-5
          "
        >
          <h2
            className="
              text-[14vw] tracking-[-0.08em] leading-none
              lg:text-[6vw]
            "
          >
            What's
          </h2>

          <img
            src={newsImage2}
            alt=""
            className="
              object-cover
              w-20 h-20
              rounded-[24px]
              lg:w-28 lg:h-28
            "
          />

          <h2
            className="
              text-[14vw] tracking-[-0.08em] leading-none text-black
              lg:text-[6vw]
            "
          >
            New
          </h2>
        </div>

        <button
          className="
            hidden
            px-8 py-4
            text-black text-lg
            bg-white
            rounded-full
            transition-all
            items-center gap-2 hover:rounded-2xl duration-500
            lg:flex
          "
        >
          Explore More Thoughts ↗
        </button>
      </div>

      {/* CARDS */}
      <div
        className="
          grid grid-cols-1
          gap-6
          lg:grid-cols-3
        "
      >
        {posts.map((post, index) => (
          <article
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            className="
              cursor-none
              group
            "
          >
            {/* IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[30px]
                relative
              "
            >
              {/* CUSTOM CURSOR */}
              <div
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                }}
                className={`
                  z-50 flex
                  w-28 h-28
                  text-5xl text-black
                  bg-[#b8f1e0]
                  rounded-full
                  pointer-events-none transition-transform
                  absolute -translate-x-1/2 -translate-y-1/2 items-center justify-center duration-0
                  ${
                    hovered === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }
                `}
              >
                ↗
              </div>

              {/* TAG */}
              {post.tag && (
                <div
                  className="
                    z-30
                    px-3 py-1
                    text-white text-sm
                    bg-[#8b5e3c]
                    rounded-full
                    absolute top-4 left-4
                  "
                >
                  {post.tag}
                </div>
              )}

              {/* IMAGE */}
              <img
                src={post.image}
                alt=""
                className={`
                  object-cover
                  w-full h-[520px]
                  transition-all
                  duration-700
                  ${hovered === index ? "scale-105" : "scale-100"}
                `}
              />

              {/* WAVE BLUR EFFECT */}
              <div
                className={`
                  overflow-hidden
                  pointer-events-none
                  absolute inset-0
                `}
              >
                <div
                  style={{
                    borderTopLeftRadius: "30%",
                    borderTopRightRadius: "30%",
                  }}
                  className={`
                    w-full h-[140%]
                    bg-white/5
                    transition-transform
                    absolute left-0 bottom-0 backdrop-blur-xl duration-500 ease-out
                    ${hovered === index ? "translate-y-0" : "translate-y-full"}
                  `}
                />
              </div>
            </div>

            {/* META */}
            <div
              className="
                flex
                mt-5
                text-black
                items-center gap-4
              "
            >
              <div
                className="
                  flex
                  text-sm
                  items-center gap-2
                  bg-white 
                  p-1
                  rounded-full
                "
              >
                <div
                  className="
                    w-6 h-6
                    bg-black/10
                    rounded-full
                  "
                />

                <span>{post.author}</span>
              </div>

              <div
                className="
                  flex
                  text-sm
                  opacity-60
                  items-center gap-2
                  bg-white 
                  p-1
                  rounded-full
                "
              >
                <span>◷</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-4
                text-black text-3xl font-medium tracking-[-0.05em] leading-[1]
                lg:text-[2.1vw]
              "
            >
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
