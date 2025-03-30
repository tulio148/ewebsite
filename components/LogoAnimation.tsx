import { motion } from "framer-motion";
import Image from "next/image";

const LogoAnimation = () => {
  return (
    <div className="flex flex-row items-center justify-end mb-32 sm:pr-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.05 * 10,
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
      >
        <Image
          src="/logoup.webp"
          alt="Edgeify Digital Logo"
          width={500}
          height={150}
          priority={true}
          className="responsive-logo mb-2"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        style={{ marginBottom: "40px" }}
        transition={{
          duration: 0.2,
          delay: 0.05 * 10,
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
      >
        <Image
          src="/logoLetters.webp"
          alt="Edgeify Digital Logo"
          width={500}
          height={150}
          priority={true}
          className="mx-auto responsive-logo mb-[-38px]"
        />
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
