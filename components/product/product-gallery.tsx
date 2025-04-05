"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SareeImage } from "@/lib/data";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: SareeImage[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-lg border bg-saree-light">
        <AspectRatio ratio={3/4}>
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt || `${productName} image ${selectedImage + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </AspectRatio>
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-auto pb-1 hide-scrollbar">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={cn(
                "relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border",
                selectedImage === index ? "ring-2 ring-saree-primary" : "hover:ring-1 hover:ring-saree-primary/50"
              )}
              onClick={() => setSelectedImage(index)}
            >
              <AspectRatio ratio={1} className="bg-saree-light">
                <Image
                  src={image.src}
                  alt={image.alt || `${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
