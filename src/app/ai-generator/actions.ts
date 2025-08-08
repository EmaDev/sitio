"use server";

import { generateAboutMe } from "@/ai/flows/generate-about-me";
import { z } from "zod";

const schema = z.object({
  experienceDetails: z.string().min(50, { message: "Se requieren al menos 50 caracteres para generar un buen resultado." }),
});

type FormState = {
  message: string | null;
  errors: {
    experienceDetails?: string[];
  } | null;
  data: string | null;
};

export async function generateAboutMeAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    experienceDetails: formData.get('experienceDetails'),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revisa los campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await generateAboutMe({
      experienceDetails: validatedFields.data.experienceDetails,
    });
    return {
      message: "Contenido generado con éxito.",
      errors: null,
      data: result.aboutMeContent,
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {
      message: "Ha ocurrido un error inesperado al contactar con el servicio de IA. Inténtalo de nuevo más tarde.",
      errors: null,
      data: null,
    };
  }
}
