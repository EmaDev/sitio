
"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

interface ImageCarouselDialogProps {
  images: (string | StaticImageData)[];
  startIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageCarouselDialog({ images, startIndex, isOpen, onClose }: ImageCarouselDialogProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!api) return;
    setTotal(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (isOpen && api) {
      api.scrollTo(startIndex, true);
    }
  }, [isOpen, startIndex, api]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-2 sm:p-4 bg-transparent border-0 shadow-none">
        <Carousel setApi={setApi} className="w-full" opts={{startIndex, loop: true}}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12" />
          <CarouselNext className="right-2 sm:-right-12" />
        </Carousel>
        {total > 0 && (
            <div className="text-center text-sm text-white/80 bg-black/50 py-1 px-3 rounded-full absolute bottom-4 left-1/2 -translate-x-1/2">
                {current} / {total}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
