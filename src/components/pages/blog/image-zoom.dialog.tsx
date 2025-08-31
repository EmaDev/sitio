
"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageZoomDialogProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageZoomDialog({ image, isOpen, onClose }: ImageZoomDialogProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };
  
  const handleClose = () => {
    setIsZoomed(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent title="Imagen Blog" className="max-w-5xl p-0 bg-transparent border-0 shadow-none flex items-center justify-center">
        <div className="relative w-full h-full cursor-zoom-in" onClick={handleZoomToggle}>
            <Image
                src={image}
                alt="Blog post image"
                width={1200}
                height={800}
                className={cn(
                    "object-contain transition-transform duration-300 ease-in-out w-full h-auto max-h-[90vh]",
                    isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                )}
            />
        </div>
      </DialogContent>
    </Dialog>
  );
}