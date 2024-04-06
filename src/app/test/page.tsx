"use client";
import React, { useEffect, useState } from "react";
import Square from "../components/Square";
import { fetchImages } from "../services/fetchData";
import Image from "next/image";

interface ImageData {
  colSpan: number;
  rowSpan: number;
  src: string;
  alt: string;
}

export default function Test() {
  const [images, setImages] = useState<ImageData[]>([]);
  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    getImages();
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="container min-h-screen mx-auto px-4 py-4 bg-white">
        <div className="grid gap-4">
          <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-5 md:grid-rows-2 grid-flow-col gap-4">
            <div
              className={`rounded-lg  col-span-2 row-span-2 aspect-square overflow-hidden`}
            >
              <Image
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Image"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
