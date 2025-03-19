"use client";
import Image from "next/image";
import { useState } from "react";

export default function Custom_slider({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <div className="w-full flex justify-center h-80 ">
        <Image
          className="object-cover"
          src={images[selectedImage]}
          width={400}
          height={250}
          alt="selected"
          loading="lazy"
        />
      </div>
      <div className="flex gap-1">
        {images.map((image, index) => (
          <div
            className="cursor-pointer w-[150px] h-[150px] overflow-hidden"
            key={index}
          >
            <Image
              className={`${
                selectedImage === index ? "scale-125 bg-orange-100" : ""
              } object-cover`}
              onClick={() => setSelectedImage(index)}
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
