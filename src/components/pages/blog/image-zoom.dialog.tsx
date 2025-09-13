
"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageZoomDialogProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageZoomDialog({ image, isOpen, onClose }: ImageZoomDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen, image]);
  
  const handleClose = () => {
    debugger
    console.log("llamaaa")
    onClose();
  };

  const handleBackdropClick = () => {
    console.log("fffff")
    handleClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-none w-screen h-screen md:h-auto md:w-auto md:max-w-5xl p-0 bg-transparent border-0 shadow-none flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleClose} 
          className="absolute top-2 left-2 z-50 bg-black/50 hover:bg-black/75 text-white hover:text-white h-10 w-10"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" />
        </Button>
        
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white z-10">
                <Loader2 className="h-10 w-10 animate-spin" />
            </div>
        )}

        <div 
          className={cn(
            "relative w-full h-auto md:h-full max-h-[90vh] flex items-center justify-center overflow-hidden", 
            isLoading ? 'invisible' : 'visible'
          )} 
          onClick={(e) => e.stopPropagation()}
        >
            <Image
                src={image}
                alt="Blog post image"
                width={1600}
                height={1200}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
                className="object-contain w-full h-auto max-h-[90vh] md:w-auto md:h-auto"
            />
        </div>
      </DialogContent>
    </Dialog>
  );
}