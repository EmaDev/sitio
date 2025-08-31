"use client"
import { useState } from 'react';
import { ImageZoomDialog } from './image-zoom.dialog';

interface Props {
    children: any;
    src: string;
}
export const ImageContainer = ({ children, src }: Props) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (postImage: string) => {
        setSelectedImage(postImage);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="relative" onClick={() => handleImageClick(src)}>
            {children}
            {selectedImage && (
                <ImageZoomDialog
                    image={selectedImage}
                    isOpen={!!selectedImage}
                    onClose={handleClose}
                />
            )}
        </div>
    )
}
