import { motion } from "framer-motion";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    open: {
      rotate: 45,
      y: 10,
      transition: {
        y: { duration: 0.05, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.15, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.05,
        ease: "easeIn",
      },
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
    open: {
      rotate: -45,
      y: -10, // Adjusted for three lines
      transition: {
        y: { duration: 0.1, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.2, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };
  return (
    <button
      aria-label="Toggle navigation menu"
      onClick={toggle}
      className="z-50"
    >
      <motion.div
        className="group flex flex-col items-center justify-center p-2 rounded-lg  transition-colors duration-200  focus:outline-none "
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          className={`w-12 h-[2px] ${
            isOpen
              ? "bg-white"
              : "bg-gradient-to-r from-primary/60 via-primary to-primary/60"
          } mb-2 rounded-full shadow-sm`}
        />
        <motion.span
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          className={`w-12 h-[2px] ${
            isOpen
              ? "bg-white"
              : "bg-gradient-to-r from-primary/60 via-primary to-primary/60"
          } mb-2 rounded-full shadow-sm transition-all duration-200 group-hover:w-6 group-hover:bg-primary/40 self-end`}
        />

        <motion.span
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          className={`w-12 h-[2px] ${
            isOpen
              ? "bg-white"
              : "bg-gradient-to-r from-primary/60 via-primary to-primary/60"
          } rounded-full shadow-sm`}
        />
      </motion.div>
    </button>
  );
};

export default AnimatedHamburger;
