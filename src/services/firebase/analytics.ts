import { collection, addDoc, getFirestore, query, orderBy, limit, getDocs } from "firebase/firestore";
import { app } from "./config";
import { Visit } from "@/lib/types";

const db = getFirestore(app);

export const recordVisit = async (page: string, ipData: any) => {
  try {
    const visitData = {
      page,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      ip: ipData.ip,
      location: {
        city: ipData.location?.city || "Unknown",
        country: ipData.location?.country || "Unknown",
        lat: ipData.location?.latitude || null,
        lng: ipData.location?.longitude || null,
      },
      userAgent: navigator.userAgent,
    };

    await addDoc(collection(db, "analytics"), visitData);
  } catch (error) {
    console.error("Error al guardar analítica:", error);
  }
};


export const getRecentVisits = async (maxResults: number = 100) => {
  try {
    const analyticsRef = collection(db, "analytics");
    const q = query(analyticsRef, orderBy("timestamp", "desc"), limit(maxResults));
    
    const querySnapshot = await getDocs(q);
    const visits: Visit[] = [];

    querySnapshot.forEach((doc) => {
      visits.push({
        ...doc.data() as Visit,
      });
    });

    return { ok: true, data: visits };
  } catch (error) {
    console.error("Error al obtener visitas:", error);
    return { ok: false, msg: error };
  }
};