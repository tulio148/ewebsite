import { motion } from "framer-motion";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
    >
      {" "}
      <motion.span
        variants={topLineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-[1px] bg-gray-800 mb-1.5 transform origin-center"
      />{" "}
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.1 }}
        className="w-6 h-[1px] bg-gray-800 mb-1.5"
      />{" "}
      <motion.span
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-[1px] bg-gray-800 transform origin-center"
      />{" "}
    </button>
  );
};

export default AnimatedHamburger;
