import { motion } from "framer-motion";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: { rotate: 0, y: 0, rotateX: 0, transition: { duration: 0.1 } },
    open: { rotate: 45, y: 5, rotateX: 180, transition: { duration: 0.4 } },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0, rotateY: 0, transition: { duration: 0.1 } },
    open: { rotate: -45, y: -5, rotateY: 180, transition: { duration: 0.4 } },
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
        className="w-10 h-[3px] bg-primary mb-2 transform origin-center"
      />{" "}
      <motion.span
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-10 h-[3px] bg-primary transform origin-center"
      />{" "}
    </button>
  );
};

export default AnimatedHamburger;
