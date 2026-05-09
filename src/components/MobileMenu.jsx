import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { navItems } from "../data/navData";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-3
            rounded-4xl
            bg-[#050505]/70
            backdrop-blur-xl
            z-999
            text-white
            flex
            flex-col
            px-6
            py-8
            overflow-y-auto
          "
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Rise at Seven</h1>

            <button onClick={() => setIsOpen(false)} className="text-5xl">
              <IoClose />
            </button>
          </div>

          <div className="mt-16">
            {navItems.map((item, index) => {
              const isAccordionOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="
                    border-b
                    border-white/10
                    py-5
                  "
                >
                  {/* HEADER */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-6
                    "
                  >
                    <div
                      className="
                        text-5xl
                        md:text-6xl
                        font-bold
                        text-left
                      "
                    >
                      {item.title}
                    </div>

                    <motion.div
                      animate={{
                        rotate: isAccordionOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        text-2xl
                        border
                        border-white/20
                        rounded-full
                        p-2
                        shrink-0
                      "
                    >
                      <IoChevronDown />
                    </motion.div>
                  </button>

                  {/* ACCORDION CONTENT */}
                  <AnimatePresence>
                    {isAccordionOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="
                          overflow-hidden
                        "
                      >
                        <div
                          className="
                            flex
                            flex-col
                            gap-4
                            pt-6
                            pl-2
                          "
                        >
                          {item.items.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{
                                opacity: 0,
                                y: 20,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: subIndex * 0.05,
                              }}
                              className="
                                  text-xl
                                  text-gray-300
                                "
                            >
                              {subItem.name}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* BUTTON */}
          <button
            className="
              mt-auto
              bg-white
              text-black
              px-8
              py-5
              rounded-full
              text-xl
              font-medium
              w-fit
            "
          >
            Get In Touch ↗
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
