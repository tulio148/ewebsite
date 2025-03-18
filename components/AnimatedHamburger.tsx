import { motion } from "framer-motion";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: { rotate: 0, y: 0, rotateX: 0, transition: { duration: 0.3 } },
    open: { rotate: 45, y: 4, rotateX: 180, transition: { duration: 0.3 } },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0, rotateY: 0, transition: { duration: 0.4 } },
    open: { rotate: -45, y: -4, rotateY: 180, transition: { duration: 0.4 } },
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
        className="w-8 h-[1.5px] bg-gray-800 mb-1.5 transform origin-center"
      />{" "}
      <motion.span
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-8 h-[1.5px] bg-gray-800 transform origin-center"
      />{" "}
    </button>
  );
};

export default AnimatedHamburger;
