import React from "react";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

const CustomImage: React.FC<Props> = ({
  alt,
  objectFit = "cover",
  className,
  ...props
}) => {
  return (
    <div
      className={`relative w-full h-full ${className || " "}`}
      style={{
        width: `${objectFit == "contain" ? "100%" : ""}`,
        height: `${objectFit == "contain" ? "100%" : ""}`,
      }}
    >
      <Image
        alt={alt}
        {...props}
        layout="fill"
        objectFit={objectFit}
        className="rounded-none"
        loading="lazy"
      />
    </div>
  );
};

export default CustomImage;
