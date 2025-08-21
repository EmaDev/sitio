'use server';
/**
 * @fileOverview An AI agent that answers questions about a programmer's profile.
 *
 * - askAboutMe - A function that handles answering questions.
 * - AskAboutMeInput - The input type for the askAboutMe function.
 * - AskAboutMeOutput - The return type for the askAboutMe function.
 */

import {ai} from '@/ai/genkit';
import { professionalProfileData } from '@/lib/data/ia';
import {z} from 'genkit';

const AskAboutMeInputSchema = z.object({
  question: z
    .string()
    .describe('The user\'s question about the programmer.'),
});
export type AskAboutMeInput = z.infer<typeof AskAboutMeInputSchema>;

const AskAboutMeOutputSchema = z.object({
  answer: z
    .string()
    .describe('The AI-generated answer to the question.'),
});
export type AskAboutMeOutput = z.infer<typeof AskAboutMeOutputSchema>;

export async function askAboutMe(input: AskAboutMeInput): Promise<AskAboutMeOutput> {
  return askAboutMeFlow(input);
}

const profileContext = JSON.stringify(professionalProfileData, null, 2);

const prompt = ai.definePrompt({
  name: 'askAboutMePrompt',
  input: {schema: AskAboutMeInputSchema},
  output: {schema: AskAboutMeOutputSchema},
  prompt: `Eres un asistente de IA amigable y profesional. Tu tarea es 
  responder preguntas sobre Emanuel Cisterna, un Desarrollador Full-Stack, 
  basándote únicamente en la información de perfil proporcionada a continuación

  Sé conciso y directo en tus respuestas, pero arama respuestas propias, no copias 
  tal cual lo que lees de los textos brindados. Si la pregunta no se puede responder con 
  la información disponible, indica amablemente que no tienes esa información.

  Información del Perfil:
  \`\`\`json
  {{{context}}}
  \`\`\`

  Pregunta del usuario: {{{question}}}
  `,
});

const askAboutMeFlow = ai.defineFlow(
  {
    name: 'askAboutMeFlow',
    inputSchema: AskAboutMeInputSchema,
    outputSchema: AskAboutMeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt({
        question: input.question,
        context: profileContext,
    });
    return output!;
  }
);
