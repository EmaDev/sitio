
"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addPostByUser } from '@/services/firebase/post';
import { IBlogPost } from '@/lib/interfaces/BlogPost';

const blogPostSchema = z.object({
  title: z.string().min(1, 'El título es requerido.'),
  image: z.string().url('Debe ser una URL de imagen válida.'),
  date: z.date({ required_error: 'La fecha es requerida.'}),
  camera: z.string().min(1, 'El nombre de la cámara es requerido.'),
  location: z.object({
    lat: z.coerce.number().min(-90).max(90),
    lng: z.coerce.number().min(-180).max(180),
  }),
  map: z.boolean().default(false),
  fixed: z.boolean().default(false),
  priority: z.enum(['1', '2', '3', '4', '5']),
  album: z.string().optional(),
  fav: z.boolean().default(false),
  tags: z.string().optional(),
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

export function NewPostForm() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, control, setValue, watch } = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
        priority: '3',
        map: false,
        fixed: false,
        fav: false,
    }
  });

  const date = watch('date');

  const onSubmit: SubmitHandler<BlogPostFormValues> = async (data) => {
    // Aquí iría la lógica para enviar los datos al backend.
    // Por ahora, solo simularemos el envío y mostraremos los datos.
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Datos del formulario:', data);
    const resp = await addPostByUser(data as any, "emanuel");
    console.log(resp)
    toast({
        title: "¡Publicación Creada!",
        description: "La nueva entrada del blog ha sido enviada (simulación).",
    });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="p-6 space-y-6">
          
          {/* Title and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" {...register('title')} />
              {errors.title && <p className="text-destructive text-sm mt-1">{errors.title.message}</p>}
            </div>
            <div>
              <Label htmlFor="image">URL de la Imagen</Label>
              <Input id="image" {...register('image')} />
              {errors.image && <p className="text-destructive text-sm mt-1">{errors.image.message}</p>}
            </div>
          </div>
          
          {/* Date and Camera */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
              <Label>Fecha de la Publicación</Label>
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : <span>Elige una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => d && setValue('date', d, { shouldValidate: true })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-destructive text-sm mt-1">{errors.date.message}</p>}
            </div>
             <div>
              <Label htmlFor="camera">Cámara Utilizada</Label>
              <Input id="camera" {...register('camera')} />
              {errors.camera && <p className="text-destructive text-sm mt-1">{errors.camera.message}</p>}
            </div>
          </div>

          {/* Location */}
          <fieldset className="border p-4 rounded-md">
            <legend className="text-sm font-medium px-1">Localización</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lat">Latitud</Label>
                  <Input id="lat" type="number" step="any" {...register('location.lat')} />
                  {errors.location?.lat && <p className="text-destructive text-sm mt-1">{errors.location.lat.message}</p>}
                </div>
                <div>
                  <Label htmlFor="lng">Longitud</Label>
                  <Input id="lng" type="number" step="any" {...register('location.lng')} />
                  {errors.location?.lng && <p className="text-destructive text-sm mt-1">{errors.location.lng.message}</p>}
                </div>
            </div>
          </fieldset>

          {/* Album and Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="album">Álbum</Label>
              <Input id="album" {...register('album')} placeholder="Ej: Viaje al Sur"/>
            </div>
            <div>
              <Label htmlFor="tags">Tags (separados por coma)</Label>
              <Input id="tags" {...register('tags')} placeholder="Ej: montaña, trekking, ushuaia"/>
            </div>
          </div>

          {/* Priority */}
          <div>
            <Label>Prioridad</Label>
            <RadioGroup
              defaultValue="3"
              className="flex items-center gap-4 mt-2"
              onValueChange={(val: '1'|'2'|'3'|'4'|'5') => setValue('priority', val)}
            >
              {[1, 2, 3, 4, 5].map(p => (
                <div key={p} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(p)} id={`p${p}`} />
                  <Label htmlFor={`p${p}`}>{p}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Booleans */}
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="fav" {...register('fav')} />
              <Label htmlFor="fav" className="font-normal">¿Es favorito?</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="map" {...register('map')} />
              <Label htmlFor="map" className="font-normal">¿Mostrar mapa?</Label>
            </div>
             <div className="flex items-center space-x-2">
              <Checkbox id="fixed" {...register('fixed')} />
              <Label htmlFor="fixed" className="font-normal">¿Fijar post?</Label>
            </div>
          </div>
          
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? 'Publicando...' : 'Publicar Entrada'}
            <Send className="ml-2" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}