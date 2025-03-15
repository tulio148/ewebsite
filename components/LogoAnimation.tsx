import { motion } from "framer-motion";
import Image from "next/image";

const LogoAnimation = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          // Adjust delay to start after text animation finishes
          delay: 0.7 + 0.1 * 10, // Assuming ~6 words in the text
          type: "spring", // Changed to spring for consistency
          stiffness: 100,
          damping: 100,
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
          duration: 1,
          // Slightly earlier than the first logo part
          delay: 0.7 + 0.1 * 10, // Also based on text length
          type: "spring",
          stiffness: 200,
          damping: 100,
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
