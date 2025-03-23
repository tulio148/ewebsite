"use client";
import { useState } from "react";
import Image from "next/image";

const ProgressiveHero = ({
  lowQualitySrc,
  highQualitySrc,
  alt,
  priority = true,
  className = "",
}: {
  lowQualitySrc: string;
  highQualitySrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-auto aspect-video overflow-hidden ${className}`}
    >
      {/* Low quality image (always visible initially) */}
      <Image
        src={lowQualitySrc}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        quality={20}
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          isHighResLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)", transform: "scale(1.05)" }}
      />

      {/* High quality image (loads in background and fades in when ready) */}
      <Image
        src={highQualitySrc}
        alt={alt}
        fill
        sizes="100vw"
        priority={false}
        quality={90}
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          isHighResLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setIsHighResLoaded(true)}
      />
    </div>
  );
};

export default ProgressiveHero;
