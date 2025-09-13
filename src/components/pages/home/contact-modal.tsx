
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre es requerido.'),
    email: z.string().email('Debe ser un email válido.'),
    phone: z.string().optional(),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { toast } = useToast();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Datos del formulario de contacto:', data);

        const resp = await emailjs.send("service_1sz7mit", "template_xmndj6k",
            {
                to_name: "Emanuel Cisterna",
                to_email: "emanuel00developer@gmail.com",
                from_name: data.name,
                from_mail: data.email,
                from_phone: data.phone || "",
                message: data.message,
            },
            "IRpKX0tzEcKYY7rM0"
        )

        if (resp.status == 200) {
            toast({
                title: "¡Mensaje Enviado!",
                description: "Gracias por contactarme. Te responderé lo antes posible.",
            });
        } else {
             toast({
                title: "¡Error al enviar mensaje",
                description: "Algo salio mal, Por favor intentalo nuevamente.",
            });
        }
        reset();
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                { /*<Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    Contacto
                    <Mail className="ml-2 h-4 w-4" />
                </Button>*/}

                <button
                    className={`group relative z-50 flex items-center justify-center overflow-hidden text-wrap
              py-2 text-center text-md font-semibold text-white shadow-md transition 
             hover:scale-110 hover:shadow-xl sm:text-xl bg-gradient-to-r from-[#FD6585] to-[#0D25B9] px-12`}
                    rel="noopener noreferrer"
                    title="Contactar a Emanuel Cisterna"
                    style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}
                >
                    <div className="width-full absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent
             via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
                    Contacto
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="my-2">Formulario de Contacto</DialogTitle>
                    <DialogDescription>
                        Envíame un mensaje y me pondré en contacto lo antes posible.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-2">
                        <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" {...register('name')} />
                            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" {...register('email')} />
                            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">Teléfono (Opcional)</Label>
                            <Input id="phone" type="tel" {...register('phone')} />
                        </div>
                        <div>
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" {...register('message')} />
                            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" disabled={isSubmitting}>
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-[#FD6585] to-[#0D25B9]">
                            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                            <span className="ml-2">{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}