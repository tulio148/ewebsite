import { motion } from "framer-motion";
import Image from "next/image";

const LogoAnimation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center flex-wrap mb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "tween",
          stiffness: 260,
          damping: 40,
        }}
      >
        <Image
          src="/logoup.webp"
          alt="Edgeify Digital Logo"
          width={500}
          height={150}
          priority={true}
          className="mx-auto responsive-logo "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        style={{
          marginBottom: "40px",
        }}
        transition={{
          duration: 1,
          delay: 0.5,
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
          className="mx-auto responsive-logo mb-[-40px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
