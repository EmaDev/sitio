import { Post } from "../../types/Post";

export const MOCK_POSTS: Post[] = [
    {
        title: "Glaciar Viciguerra",
        date: new Date("2024, 6, 21"),
        camera: "Google Pixel 8 Pro ƒ/1,68 . 1/228 . 6,9mm . ISO69",
        location: {
            lng: -68.336,
            lat: -54.728
        },
        fixed: false,
        map: true,
        priority: 2,
        image: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/viajes-app%2Femanuel%2FPXL_20240621_152220687.PORTRAIT.ORIGINAL.jpg?alt=media&token=4f5f40ac-555d-47c1-8388-d09512390468",
        album: "Ushuaia",
        fav: false,
    },
    {
        title: "Isla Grande de Tierra del Fuego",
        date: new Date("2024, 6, 21"),
        camera: "Google Pixel 8 Pro ƒ/1,68 . 1/498 . 6,9mm . ISO21",
        location: {
            lng: -68.3317, 
            lat: -54.7323
        },
        fixed: false,
        map: true,
        priority: 3,
        image: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/viajes-app%2Femanuel%2FPXL_20240621_162200250.PORTRAIT.jpg?alt=media&token=84994397-54aa-4ae1-9929-309c0bca9b2e",
        album: "ushuaia",
        fav: true,
    }
]