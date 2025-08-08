"use client"

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


const TOKEN = "pk.eyJ1IjoiZW1hZGV2IiwiYSI6ImNtNDVzNjlyNjExN2kya3E1b20yN3pxM3IifQ.96pxLq8SXmg4C3Pw-MLoLg"

mapboxgl.accessToken = TOKEN;

interface Props {
    lng: number;
    lat: number;
}
export const MapComponenet = ({lng, lat}:Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const mapContainerRef: any = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300)
    }, [])

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapContainerRef.current!,
                center: [lng, lat],
                zoom: 14
            })
            const marker = new mapboxgl.Marker({ color: 'red' }) // Opcional: cambiar color
                .setLngLat([lng, lat]) // Coordenadas del marcador
                .addTo(map);

            marker.setLngLat([lng, lat]); // Actualizar la posición del marcador
            map.flyTo({ center: [lng, lat], zoom: 9 });
        }
    }, [isLoading])

    return (

        <div id='map-container' ref={mapContainerRef}
           style={{height: "120%", width: "120%"}}
        >
        </div>
    )
}
