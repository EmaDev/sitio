import { collection, query, where, getDocs, getFirestore, setDoc, doc, addDoc, orderBy, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./config";
import { IBlogPost } from "@/lib/interfaces/BlogPost";
const db = getFirestore(app);
const storage = getStorage(app);

// Función auxiliar para subir archivos
export async function uploadImageAndGetURL(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

export const getPostsByUser = async (userName: string, album: string) => {
    try {
        const baseQuery = collection(db, "viajes-app", userName, "post");
        let q;
        if (album !== "") {
            q = query(baseQuery, where("album", "==", album));
            //q = query(q, orderBy("fixed", "desc"));
        } else {
            q = query(baseQuery, where("fav", "==", true));
            //q = query(q, orderBy("priority", "desc"));
        }

        const querySnapshot = await getDocs(q);
        const posts: IBlogPost[] = [];

        querySnapshot.forEach((doc) => {
            posts.push({
                ...doc.data() as any,
                id: doc.id
            })
        });

        posts.sort((a, b) => {
            // Primero ordenar por la condición booleana "fixed"
            if (a.fixed && !b.fixed) return -1; // `a` va primero
            if (!a.fixed && b.fixed) return 1;  // `b` va primero

            // Si ambos tienen el mismo valor de "fixed", ordenar por "priority" (de mayor a menor)
            return a.priority - b.priority;
        });

        return {
            ok: true,
            data: posts
        }

    } catch (error) {
        return {
            ok: false,
            msg: error
        }
    }
}

export const getTravelById = async (userName: string, postId: string) => {
    try {
        const docRef = doc(db, "viajes-app", userName, "travel", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { ok: true, data: { ...docSnap.data(), id: docSnap.id } as IBlogPost };
        } else {
            return { ok: false, msg: "No se encontró el post" };
        }
    } catch (error) {
        return { ok: false, msg: error };
    }
}

export const addPostByUser = async (data: IBlogPost, userName: string) => {
    try {
        const resp = await addDoc(collection(db, "viajes-app", userName, "post"), data);
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}

export const addTravelByUser = async (data: IBlogPost, userName: string) => {
    try {
        const resp = await addDoc(collection(db, "viajes-app", userName, "travel"), data);
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}

export const getTravelStubs = async (userName: string) => {
    try {
        const baseQuery = collection(db, "viajes-app", userName, "travel");
        const q = query(baseQuery, orderBy("date", "desc"));
        
        const querySnapshot = await getDocs(q);
        
        const stubs = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id, // Este será tu slug para el Link
                title: data.title || "Sin título",
                coverImage: data.coverImage || "",
                date: data.date,
                // Cortamos la descripción a 150 caracteres para la tarjeta
                shortDescription: data.description 
                    ? data.description.substring(0, 150) + "..." 
                    : "Sin descripción disponible."
            };
        });

        return { ok: true, data: stubs };
    } catch (error) {
        console.error("Error obteniendo stubs:", error);
        return { ok: false, msg: error };
    }
}