import { ArrowUpRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

export const Footer = () => {
  const socials = ["Fb", "X", "In", "Yt", "Tk", "Ig"];

  const column1 = ["Services", "Work", "About", "Culture", "Meet The Risers"];

  const column2 = ["Testimonials", "Blog & Resources", "Webinars", "Careers"];

  const column3 = ["Sheffield", "Manchester", "London", "New York", "Contact"];

  return (
    <footer
      className="
        overflow-hidden
        mt-20 mx-2
        text-white
        bg-black
        rounded-[40px]
      "
    >
      <div
        className="
          px-8 pt-10
          lg:px-14 lg:pt-14
        "
      >
        {/* TOP */}
        <div
          className="
            grid grid-cols-1
            gap-12
            lg:grid-cols-4
          "
        >
          {/* LEFT */}
          <div
            className="
              lg:col-span-1
            "
          >
            <h3
              className="
                text-3xl font-semibold tracking-[-0.05em] leading-none
                lg:text-[2.1rem]
              "
            >
              Stay updated with Rise news
            </h3>

            {/* EMAIL */}
            <div
              className="
                flex
                h-16
                mt-8 pl-6 pr-2
                bg-white/10
                rounded-full
                items-center justify-between
              "
            >
              <input
                type="text"
                placeholder="Your Email Address"
                className="
                  w-full
                  text-lg
                  bg-transparent
                  outline-none placeholder:text-white/40
                "
              />

              <button
                className="
                  flex
                  w-12 h-12
                  text-black
                  bg-[#b8f1e0]
                  rounded-full
                  transition-transform
                  items-center justify-center shrink-0 hover:scale-105
                "
              >
                <ArrowUpRight size={22} />
              </button>
            </div>

            {/* SOCIALS */}
            <div
              className="
                flex flex-wrap
                mt-5
                items-center gap-2
              "
            >
              {socials.map((item, index) => (
                <button
                  key={index}
                  className="
                    flex
                    h-8
                    px-3
                    text-black
                    bg-white
                    rounded-full
                    transition-colors
                    items-center justify-center gap-1 hover:bg-[#b8f1e0]
                  "
                >
                  <span
                    className="
                      text-sm font-medium
                    "
                  >
                    {item}
                  </span>

                  <ArrowUpRight size={12} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div
            className="
              grid grid-cols-1
              gap-10
              sm:grid-cols-3
              lg:col-span-3
            "
          >
            {/* COLUMN 1 */}
            <div
              className="
                pl-6
                border-l border-white/20
              "
            >
              <ul
                className="
                  space-y-3
                "
              >
                {column1.map((item) => (
                  <li
                    key={item}
                    className="
                      text-2xl
                    "
                  >
                    <AnimatedText text={item} />
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div
              className="
                pl-6
                border-l border-white/20
              "
            >
              <ul
                className="
                  space-y-3
                "
              >
                {column2.map((item) => (
                  <li
                    key={item}
                    className="
                      text-2xl
                    "
                  >
                    <AnimatedText text={item} />
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div
              className="
                pl-6
                border-l border-white/20
              "
            >
              <ul
                className="
                  space-y-3
                "
              >
                {column3.map((item) => (
                  <li
                    key={item}
                    className="
                      text-2xl
                    "
                  >
                    <AnimatedText text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BIG TEXT */}
        <div
          className="
            overflow-hidden
            mt-20
            lg:mt-28
          "
        >
          <h1
            className="
              text-[22vw] leading-none tracking-[-0.08em] font-semibold whitespace-nowrap
              lg:text-[14vw]
            "
          >
            Rise at Seven°
          </h1>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex flex-col
            pb-8 mt-6
            text-sm text-white/80
            gap-5
            lg:flex-row lg:items-center lg:justify-between
          "
        >
          <div
            className="
              flex flex-wrap
              items-center gap-4
            "
          >
            <p>© 2025 Rise at Seven Ltd. All rights reserved</p>

            <span>•</span>

            <p>Company Number 11955187</p>

            <span>•</span>

            <p>VAT Registered GB 322402945</p>

            <span>•</span>

            <p>Privacy Policy</p>

            <span>•</span>

            <p>Terms & conditions</p>
          </div>

          <p
            className="
              text-white/60
            "
          >
            Website MadeByShape
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
