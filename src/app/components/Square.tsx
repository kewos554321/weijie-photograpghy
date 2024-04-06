import Image from "next/image";
import React from "react";

interface SquareProps {
  color?: string;
  colSpan?: number;
  rowSpan?: number;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Square: React.FC<SquareProps> = ({
  color = "blue-500",
  colSpan,
  rowSpan,
  src,
  alt,
  width = 500,
  height = 500,
}) => {
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : "";
  return (
    <div
      className={`rounded-lg ${colSpanClass} ${rowSpanClass} aspect-square overflow-hidden`}
    >
      {src && (
        <Image
          src={src}
          alt={alt || "Image"}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default Square;
