import { motion } from "framer-motion";

export const WorkCursor = ({
  mousePosition,
}) => {
  return (
    <motion.div
      animate={{
        x: mousePosition.x - 40,
        y: mousePosition.y - 40,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
      className="
        fixed
        top-0
        left-0
        w-20
        h-20
        rounded-full
        bg-[#c7f5e7]
        pointer-events-none
        z-[9999]
        flex
        items-center
        justify-center
        text-3xl
        mix-blend-difference
      "
    >
      ↗
    </motion.div>
  );
};

export default WorkCursor;