export interface IBlogPost {
    id?:string;
    title: string;
    image: string;
    date: any;
    camera: string;
    location: {
        lng: number;
        lat: number;
    }
    map: boolean;
    fixed: boolean;
    priority: 1|2|3|4|5;
    album: string | undefined;
    fav: boolean;
    tags?:string;
}