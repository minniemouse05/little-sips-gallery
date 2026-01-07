"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Modal from "./Modal";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        {images.map((image, index) => (
          <Reveal key={image.src}>
            <button
              onClick={() => setSelectedImage(image)}
              className="group flex w-full cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
              aria-label={`View details: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                className="h-auto w-full object-contain"
                priority={index < 3}
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title ?? ""}
        description={selectedImage?.description ?? ""}
      />
    </>
  );
}
