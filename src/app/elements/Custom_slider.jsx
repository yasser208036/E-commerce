"use client";
import Image from "next/image";
import { useState } from "react";

export default function Custom_slider({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const changeImage = (index) => {
    setSelectedImage(images[index]);
  };
  return (
    <>
      <div className="w-full flex justify-center h-80 ">
        <Image
          className="object-cover"
          src={selectedImage}
          width={400}
          height={250}
          alt="selected"
        />
      </div>
      <div className="flex gap-1">
        {images.map((image, index) => (
          <div
            className="cursor-pointer w-[150px] h-[150px] overflow-hidden"
            key={index}
          >
            <Image
              onClick={() => changeImage(index)}
              src={image}
              width={150}
              height={150}
              alt="image"
            />
          </div>
        ))}
      </div>
    </>
  );
}
