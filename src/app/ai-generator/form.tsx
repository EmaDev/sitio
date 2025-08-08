"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateAboutMeAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bot, Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";

const initialState = {
  message: null,
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Generando..." : "Generar Texto"}
      <Bot className="ml-2 h-4 w-4" />
    </Button>
  );
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if(navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
        }
    };

    useEffect(() => {
        if(copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    return (
         <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy to clipboard">
            {copied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
        </Button>
    )
}

export function AboutMeGeneratorForm() {
  const [state, formAction] = useFormState(generateAboutMeAction, initialState);

  return (
    <div className="space-y-8">
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Detalles de Experiencia</CardTitle>
            <CardDescription>
              Describe tu experiencia, habilidades, tecnologías que dominas y tus objetivos profesionales. Cuanto más detallado seas, mejor será el resultado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-2">
              <Label htmlFor="experienceDetails">Tu experiencia</Label>
              <Textarea
                id="experienceDetails"
                name="experienceDetails"
                placeholder="Ej: Soy un desarrollador con 5 años de experiencia en JavaScript, especializado en el ecosistema React. He trabajado en proyectos de e-commerce y fintech..."
                rows={10}
                required
                aria-describedby="experience-error"
              />
              {state.errors?.experienceDetails && (
                <p id="experience-error" className="text-sm text-destructive">{state.errors.experienceDetails[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
              <SubmitButton />
          </CardFooter>
        </form>
      </Card>

       {state.message && state.errors && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
      )}

      {state.data && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Resultado Generado</CardTitle>
                <CardDescription>Este es el texto generado por la IA para tu sección "Sobre mí".</CardDescription>
              </div>
              <CopyButton textToCopy={state.data} />
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap p-4 bg-secondary/50 rounded-md">{state.data}</p>
            </CardContent>
          </Card>
      )}
    </div>
  );
}
