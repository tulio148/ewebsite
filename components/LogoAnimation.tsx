import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "@/public/logos/logoImg-512.avif";
import logoLetters from "@/public/logos/logoLetters-512.avif";

const LogoAnimation = () => {
  return (
    <div className="flex flex-row items-center justify-end mb-32 sm:pr-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.5 + 0.05 * 10,
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
      >
        <Image
          src={logoImg}
          alt="Edgeify Digital Logo"
          width={512}
          height={512}
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 200px, 150px"
          priority={true}
          className="mb-2 w-[150px] md:w-[200px] xl:w-[300px] h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        style={{ marginBottom: "40px" }}
        transition={{
          duration: 0.2,
          delay: 0.5 + 0.05 * 10,
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
      >
        <Image
          src={logoLetters}
          alt="Edgeify Digital Logo"
          width={512}
          height={512}
          sizes="(min-width: 1200px) 300px, (min-width: 768px) 200px, 150px"
          priority={true}
          className="mx-auto mb-[-38px] w-[150px] md:w-[200px] xl:w-[300px] h-auto"
        />
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
