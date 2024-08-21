'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import picture1 from '../../public/marketing.jpeg';
import picture2 from '../../public/mockup.jpg';
import picture3 from '../../public/brand.jpg';
import picture4 from '../../public/web.jpg';

const images = [
  { src: picture1, alt: "Marketing image" },
  { src: picture2, alt: "Mockup image" },
  { src: picture3, alt: "Brand image" },
  { src: picture4, alt: "Web image" },
];

const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-col justify-center gap-6 mx-10">
        {/* Main Image Display with Animation */}
        <motion.div
          key={mainImage.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src={mainImage.src} 
            width={700} 
            height={700} 
            alt={mainImage.alt} 
            className="rounded-xl"
            priority // Load this image with higher priority
          />
        </motion.div>

        {/* Thumbnail Images */}
        <div className="flex justify-between gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(image)}
              className="cursor-pointer"
            >
              <Image 
                src={image.src}
                width={200} 
                height={200} 
                alt={image.alt} 
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
