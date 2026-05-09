import { motion } from "framer-motion";

import demandIMage from "../assets/images/demand.png";
import AnimatedText from "./AnimatedText";

export const DemandSection = () => {
  return (
    <section
      className="
        bg-[#f5f5f2]
        px-6
        lg:px-14
        py-24
        lg:py-32
      "
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-20
          items-start
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            max-w-md
          "
        >
          <p
            className="
              text-xl
              lg:text-3xl
              leading-[1]
              tracking-[-0.04em]
              font-medium
              text-black
            "
          >
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            flex
            flex-col
            items-start
            lg:items-start
          "
        >
          <h2
            className="
              text-[18vw]
              sm:text-[14vw]
              lg:text-[7vw]
              font-bold
              leading-[0.9]
              tracking-[-0.07em]
              text-black
            "
          >
            Driving Demand &
            <br />
            Discovery{" "}
            <img
              src={demandIMage}
              alt="Discovery"
              className="
                inline-block
                w-20
                h-20
                lg:w-28
                lg:h-28
                rounded-[20px]
                object-cover
                align-middle
                ml-2
              "
            />
          </h2>

          {/* BUTTONS */}
          <div
            className="
              flex
              items-center
              gap-4
              mt-10
              flex-wrap
            "
          >
            <button
              className="
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                text-lg
                font-medium
                hover:rounded-[14px]
                transition-[border-radius,background-color,color]
                duration-400
                ease-[cubic-bezier(0.76,0,0.24,1)]
              "
            >
              <AnimatedText text="Our Story ↗" />
            </button>

            <button
              className="
                text-black
                text-lg
                font-medium
                transition-transform
                duration-300
              "
            >
              <AnimatedText text="Our Services ↗" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemandSection;
