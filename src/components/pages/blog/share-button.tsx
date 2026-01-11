"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Share2, Link as LinkIcon, Check } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

export default function ShareButton({ log }: { log: any }) {
    const [pageUrl, setPageUrl] = useState('');
    const { toast } = useToast();

    useEffect(() => {
        // This ensures window is defined, avoiding SSR issues.
        setPageUrl(window.location.href);
    }, []);

    const handleShare = async () => {
        if (!log) return;
        
        const shareData = {
            title: log.title,
            text: `Echa un vistazo a este diario de viaje: ${log.title}}!`,
            url: pageUrl,
        };

        // Check if the Web Share API is available
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
                // Fallback to clipboard if user cancels share dialog
                copyToClipboard();
            }
        } else {
            // Fallback for desktop browsers
            copyToClipboard();
        }
    };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            toast({
                title: "Link Copiado!",
                description: "La URL del diario de viaje ha sido copiada al portapapeles.",
            });
        }).catch(err => {
            console.error("Failed to copy:", err);
            toast({
                variant: "destructive",
                title: "Failed to Copy",
                description: "Could not copy the link to your clipboard.",
            });
        });
    }

    if (!pageUrl) return null;

    return (
        <Button variant="outline" size="lg" onClick={handleShare}>
            <Share2 className="mr-2 h-5 w-5" />
            Compartir
        </Button>
    );
}