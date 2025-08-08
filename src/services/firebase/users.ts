import {getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./config";
import { User } from "../../types/User";
const db = getFirestore(app);


export const getUserByName = async (userName: string) => {
    try {
        const docRef = doc(db, "viajes-app", userName);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const userData: User = docSnap.data() as any;
            return {
                ok: true,
                data: userData
            }
        }else{
            throw new Error("El usuario no existe")
        }
    } catch (error) {
        return {
            ok: false,
        }
    }
}