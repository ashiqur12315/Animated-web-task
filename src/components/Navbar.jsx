import { useState } from "react";
import { motion } from "framer-motion";
import MegaMenu from "./MegaMenu";
import { navItems } from "../data/navData";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AnimatedText from "./AnimatedText";

export const Navbar = ({ setMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleEnter = (item) => {
    setActiveMenu(item);
    setMenuOpen(true);
  };

  const handleLeave = () => {
    setActiveMenu(null);
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-8
        py-6
      "
      onMouseLeave={handleLeave}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">
          Rise at Seven
        </h1>

        <div className="hidden lg:flex gap-3">
          {navItems.map((item) => {
            const isActive =
              activeMenu?.title === item.title;

            return (
              <button
                key={item.title}
                onMouseEnter={() => handleEnter(item)}
                className="
                  relative
                  px-5
                  py-2
                  rounded-full
                "
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="
                      absolute
                      inset-0
                      bg-white
                      rounded-full
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`
                    relative
                    z-10
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  {item.title} +
                </span>
              </button>
            );
          })}
        </div>

        <button
          className="
            hidden
            lg:block
            bg-white
            text-black
            px-8
            py-4
            rounded-full
            font-medium
          "
        >
          <AnimatedText text="Get in Touch" />
        </button>

        <button className="lg:hidden text-4xl">
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      <MegaMenu activeMenu={activeMenu} />
    </nav>
  );
};

export default Navbar;