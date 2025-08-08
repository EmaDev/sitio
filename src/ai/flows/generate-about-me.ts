// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent that generates an 'About Me' section for a programmer's portfolio.
 *
 * - generateAboutMe - A function that generates the about me content.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  experienceDetails: z
    .string()
    .describe(
      'Detailed information about the programmer\'s experience, skills, and career history.'
    ),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  aboutMeContent: z
    .string()
    .describe('The generated content for the About Me section.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are a professional content writer specializing in creating engaging and informative "About Me" sections for programmer portfolios.

  Based on the provided experience details, generate a compelling and concise "About Me" section that highlights the programmer's skills, experience, and career goals.

  Experience Details: {{{experienceDetails}}}
  `,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
