
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload } from 'lucide-react';
import { addTravelByUser, uploadImageAndGetURL } from '@/services/firebase/post';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const createLogSchema = z.object({
    title: z.string().optional(),
    destinationId: z.string().optional(),
    date: z.string().optional(),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    longDescription: z.string().optional(),
    spotifyUrl: z.string().optional(),
    wikilocUrl: z.string().url("Please enter a valid Wikiloc URL.").optional().or(z.literal('')),
    wikilocDistance: z.string().optional(),
    wikilocTime: z.string().optional(),
    wikilocDifficulty: z.string().optional(),
    wikilocElevationGain: z.string().optional(),
    wikilocMaxAltitude: z.string().optional(),
    coverImage: z
        .any()
        .optional()
        .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
        .refine(
            (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
    gallery: z
        .any()
        .optional()
        .refine((files) => !files || files.length === 0 || Array.from(files).every((file: any) => file.size <= MAX_FILE_SIZE), `Max file size is 5MB.`)
        .refine(
            (files) => !files || files.length === 0 || Array.from(files).every((file: any) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
});

type CreateLogFormValues = z.infer<typeof createLogSchema>;

export default function CreateLogForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<CreateLogFormValues>({
        resolver: zodResolver(createLogSchema),
        defaultValues: {
            title: "",
            destinationId: "",
            date: "",
            latitude: "",
            longitude: "",
            longDescription: "",
            spotifyUrl: "",
            wikilocUrl: "",
            wikilocDistance: "",
            wikilocTime: "",
            wikilocDifficulty: "",
            wikilocElevationGain: "",
            wikilocMaxAltitude: "",
        },
    });

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setCoverPreview(null);
        }
    };

    const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const newPreviews: string[] = [];
            const fileArray = Array.from(files);
            fileArray.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newPreviews.push(reader.result as string);
                    if (newPreviews.length === fileArray.length) {
                        setGalleryPreviews(newPreviews);
                    }
                };
                reader.readAsDataURL(file);
            });
        } else {
            setGalleryPreviews([]);
        }
    };

    async function onSubmit(data: CreateLogFormValues) {
        setIsSubmitting(true);
        try {
            const userName = "emanuel"; // Aquí deberías obtener el usuario autenticado
            let coverImageUrl = "";
            let galleryUrls: string[] = [];
            // 1. Subir Imagen de Portada si existe
            if (data.coverImage?.[0]) {
                const path = `viajes-app/${userName}/${Date.now()}_cover.jpg`;
                coverImageUrl = await uploadImageAndGetURL(data.coverImage[0], path);
            }

            // 2. Subir Galería si existe
            if (data.gallery && data.gallery.length > 0) {
                const uploadPromises = Array.from(data.gallery as FileList).map((file, index) => {
                    const path = `viajes-app/${userName}/${Date.now()}_gallery_${index}.jpg`;
                    return uploadImageAndGetURL(file, path);
                });
                galleryUrls = await Promise.all(uploadPromises);
            }

            // 3. Preparar el objeto final para Firestore
            const finalPostData = {
                title: data.title,
                destinationId: data.destinationId,
                date: data.date,
                location: {
                    lat: data.latitude,
                    lng: data.longitude
                },
                description: data.longDescription,
                spotifyUrl: data.spotifyUrl,
                wikiloc: {
                    url: data.wikilocUrl,
                    distance: data.wikilocDistance,
                    time: data.wikilocTime,
                    difficulty: data.wikilocDifficulty,
                    elevationGain: data.wikilocElevationGain,
                    maxAltitude: data.wikilocMaxAltitude,
                },
                coverImage: coverImageUrl,
                gallery: galleryUrls,
                fav: false,    // Valores por defecto
                fixed: false,
                priority: 0,
                createdAt: new Date().toISOString()
            };

            // 4. Llamar a tu función de Firebase
            await addTravelByUser(finalPostData as any, userName);

            toast({
                title: "¡Éxito!",
                description: "Tu bitácora se ha guardado correctamente.",
            });

            form.reset();
            setCoverPreview(null);
            setGalleryPreviews([]);
            router.push('/'); // Redirigir al finalizar

        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "No se pudo guardar el posteo.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Trip Details</CardTitle>
                        <CardDescription>Provide the core information about your journey.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Hiking the Andes" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="destinationId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Destination ID</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., brasil, ushuaia" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="latitude"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Latitude</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., -34.6037" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="longitude"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Longitude</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., -58.3816" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="longDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your adventure..."
                                            className="min-h-[150px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="spotifyUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Spotify Playlist URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://open.spotify.com/playlist/..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="wikilocUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wikiloc Route URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://www.wikiloc.com/..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Wikiloc Data</CardTitle>
                        <CardDescription>Enter the stats for your route.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="wikilocDistance"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Distance</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 45 km" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="wikilocTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 5 days" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="wikilocDifficulty"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Difficulty</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Hard" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="wikilocElevationGain"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Elevation Gain (Desnivel)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 1200 m" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="wikilocMaxAltitude"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Max Altitude</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 800 m" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Media</CardTitle>
                        <CardDescription>Upload a cover image and photos for your gallery.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cover Image</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" onChange={(e) => { field.onChange(e.target.files); handleCoverChange(e); }} />
                                    </FormControl>
                                    <FormDescription>This will be the main image for your travel log.</FormDescription>
                                    <FormMessage />
                                    {coverPreview && (
                                        <div className="mt-4 relative w-full h-64 rounded-lg overflow-hidden border">
                                            <Image src={coverPreview} alt="Cover preview" layout="fill" objectFit="cover" />
                                        </div>
                                    )}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gallery"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gallery Images</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" multiple onChange={(e) => { field.onChange(e.target.files); handleGalleryChange(e); }} />
                                    </FormControl>
                                    <FormDescription>Select multiple images to create a gallery.</FormDescription>
                                    <FormMessage />
                                    {galleryPreviews.length > 0 && (
                                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {galleryPreviews.map((src, index) => (
                                                <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden border">
                                                    <Image src={src} alt={`Gallery preview ${index + 1}`} layout="fill" objectFit="cover" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit Log
                    </Button>
                </div>
            </form>
        </Form>
    );
}