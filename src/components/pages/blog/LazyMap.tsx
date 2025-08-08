"use client"

import React, { useEffect, useState, useRef } from 'react';
import { MapComponenet } from './Map';


interface Props {
    lng: number;
    lat: number;
}

export const LazyMap = ({ lng, lat }: Props) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Deja de observar una vez que se hace visible
                }
            },
            { threshold: 0.9 } // Ajusta este valor según lo que quieras detectar
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ height: '100%', width: "100%" }}>
            {isVisible ? (
                <MapComponenet lng={lng} lat={lat} />
            ) : (
                <div className="rounded-lg">
                    <div className="h-32 rounded-lg bg-default-300" />
                </div>
            )}
        </div>
    )
}
