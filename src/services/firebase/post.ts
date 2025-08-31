import { collection, query, where, getDocs, getFirestore, setDoc, doc, addDoc, orderBy } from "firebase/firestore";
import { app } from "./config";
import { IBlogPost } from "@/lib/interfaces/BlogPost";
const db = getFirestore(app);


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

export const addPostByUser = async (data: IBlogPost, userName: string) => {
    try {
        const resp = await addDoc(collection(db, "viajes-app", userName, "post"), data);
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}