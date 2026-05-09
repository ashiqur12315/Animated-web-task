import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import AnimatedText from "./AnimatedText";

export const MegaMenu = ({ activeMenu }) => {
  const [activeItem, setActiveItem] = useState(activeMenu?.items?.[0] || null);

  if (!activeMenu) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          top-24
          left-1/2
          -translate-x-1/2
          w-[75%]
          bg-white/90
          backdrop-blur-xl
          rounded-[40px]
          p-10
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          z-50
        "
      >
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <p className="text-gray-500 mb-6">Core Services</p>

            <div className="grid grid-cols-2 gap-4">
              {activeMenu.items.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveItem(item)}
                  className="
                    text-black
                    text-2xl
                    font-medium
                    cursor-pointer
                  "
                >
                  <AnimatedText text={item.name} />
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              relative
              rounded-[30px]
              overflow-hidden
              min-h-[350px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem?.image}
                src={activeItem?.image}
                initial={{
                  opacity: 0,
                  scale: 1.1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />
            </AnimatePresence>

            {activeMenu && activeMenu.title == "Services" && (
              <button
                className="
                absolute
                bottom-6
                left-6
                bg-black
                text-white
                px-6
                py-4
                rounded-full
                z-10
              "
              >
                View All Services →
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MegaMenu;
