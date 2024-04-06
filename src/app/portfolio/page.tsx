"use client";
import Image from "next/image";
import Square from "../components/Square";
import ImageGrid from "../components/ImageGrid";
import Pagination from "../components/Pagination";
import { fetchImages } from "../services/fetchData";
import React, { useEffect, useState } from "react";

interface ImageData {
  colSpan: number;
  rowSpan: number;
  src: string;
  alt: string;
}

export default function Portfolio() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / 28);

  const handlePageChange = (page: number): void => {
    // 逻辑处理，比如设置当前页码
    setCurrentPage(page);
    // 可能还有其他逻辑，比如重新获取数据
  };
  // let str = ''
  // for (let i = 0; i<60;i+=1) {
  //   str = str + `{
  //     "colSpan": 1,
  //     "rowSpan": 1,
  //     "src": "https://picsum.photos/250/250?random=${i+1}",
  //     "alt": "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  //   },`
  // }
  // console.log("jay-{}{}", str);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    getImages();
  }, []);

  const splitImagesIntoGroups = (images: any, groupSize: number) => {
    const groups = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groups.push(images.slice(i, i + groupSize));
    }
    return groups;
  };

  const imageGroups = splitImagesIntoGroups(images, 7);
  const imageGroupsByPage = imageGroups.slice(
    currentPage - 1,
    currentPage - 1 + 4
  );
  console.log("jay-currentPage=", JSON.stringify(currentPage));
  if (currentPage == 2) {
    for (let i = 0; i < imageGroupsByPage.length; i += 1) {
      console.log(`jay-${i}=${JSON.stringify(imageGroupsByPage[i])}`);
    }
  } else if (currentPage == 1) {
    for (let i = 0; i < imageGroupsByPage.length; i += 1) {
      console.log(`jay-${i}=${JSON.stringify(imageGroupsByPage[i])}`);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="container min-h-screen mx-auto px-4 py-4 bg-white">
        <div className="grid gap-4">
          {imageGroupsByPage.map((group, index) => (
            <ImageGrid
              key={`${currentPage}-${index}`}
              images={group}
              imageIndex={index}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </main>
  );
}
