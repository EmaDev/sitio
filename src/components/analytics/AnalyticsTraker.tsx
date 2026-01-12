// components/analytics/AnalyticsTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordVisit } from "@/services/firebase/analytics";

// Configuración de filtros
const IGNORED_PATHS = ["/admin", "/dashboard"]; // Rutas que NO quieres trackear
const IGNORED_IPS = ["2802:8010:8244:6c01:2926:487e:aeae:b79"]; // Agrega aquí tu IP actual

export const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    const track = async () => {
      // 1. Verificar si la ruta actual está en la lista negra
      const isIgnoredPath = IGNORED_PATHS.some(path => pathname.startsWith(path));
      if (isIgnoredPath) return;

      try {
        // 2. Obtener datos de la IP
        const response = await fetch("https://ip.guide/");
        if (!response.ok) return;
        
        const ipData = await response.json();
        const userIp = ipData.ip;

        // 3. Verificar si la IP está en la lista negra
        if (IGNORED_IPS.includes(userIp)) {
          console.log("Visita ignorada: IP en lista negra.");
          return;
        }

        // 4. Si pasa los filtros, guardar en Firebase
        await recordVisit(pathname, ipData);
        
      } catch (error) {
        console.error("Tracker Error:", error);
      }
    };

    track();
  }, [pathname]); 

  return null;
};