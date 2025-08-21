'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ImageCarouselDialog } from '@/components/pages/proyectos/image-carousel-dialog';

type Img = string | StaticImageData;

export function ImagesGridWithDialog({
  images,
  allImages,
  startOffset,
  layout,
}: {
  images: Img[];
  allImages: Img[];
  startOffset: number;
  layout: 'main' | 'remaining';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (localIndex: number) => {
    setIdx(startOffset + localIndex);
    setIsOpen(true);
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* grid según bloque */}
      {layout === 'main' ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="overflow-hidden rounded-lg cursor-pointer block w-full h-full"
            >
              <Image
                src={img}
                width={400}
                height={400}
                alt={`Project image ${i + 1}`}
                className="rounded-lg object-cover w-full h-full aspect-video lg:aspect-[4/5] transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint="project screenshot"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="overflow-hidden rounded-lg cursor-pointer block w-full h-full"
            >
              <Image
                src={img}
                width={400}
                height={300}
                alt={`Project image ${i + 1}`}
                className="rounded-lg object-cover w-full aspect-video transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint="project screenshot"
              />
            </button>
          ))}
        </div>
      )}

      {/* diálogo del carrusel */}
      <ImageCarouselDialog
        images={allImages}
        startIndex={idx}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
