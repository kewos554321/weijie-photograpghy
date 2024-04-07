"use client";
import React from "react";
import Square from "./Square";

interface ImageData {
  colSpan: number;
  rowSpan: number;
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageData[];
  imageIndex: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, imageIndex }) => {
  for (let i = 0; i <= images.length; i += 1) {
    if (
      (i === 0 && imageIndex === 0) ||
      (i === 4 && imageIndex === 1) ||
      (i === 2 && imageIndex === 2) ||
      (i === 6 && imageIndex === 3)
    ) {
      images[i].colSpan = 2;
      images[i].rowSpan = 2;
    }
  }
  return (
    <div className="grid grid-cols-5 grid-rows-2 grid-flow-col gap-4">
      {images.map((image, index) => (
        <Square
          key={index}
          colSpan={image.colSpan}
          rowSpan={image.rowSpan}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
