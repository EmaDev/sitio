"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { askAboutMe } from "@/ai/flows/ask-about-me";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IProject } from "@/lib/data/projects";

interface AiProjectChatProps {
    project: IProject;
}

export function AiProjectChat({ project }: AiProjectChatProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const examplePrompts = [
    `¿Cuál fue el mayor desafío técnico en el proyecto ${project.title}?`,
    `¿Qué tecnologias se eligieron para este proyecto?`,
    `Resume la solución implementada en ${project.title}.`,
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    try {
      const projectContext:any = JSON.stringify(project, null, 2);
      const result = await askAboutMe({ question: `${question}. Respecto al proyecto de id: ${project.id}, usa este id para buscar el proyecto pero no lo muestres en la respuesta`, projectContext } as any);
      setAnswer(result.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuestion(prompt);
  };

  return (
    <Card className="bg-background/50">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="text-primary h-6 w-6" />
                Consulta a la IA sobre este proyecto
            </CardTitle>
            <CardDescription>
                Podés hacer una pregunta específica sobre <b>{project.title}</b> y la IA te responderá.
            </CardDescription>
        </CardHeader>
        <CardContent>
             <div className="grid gap-4 py-4">
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Sugerencias</h4>
                    <div className="flex flex-col sm:flex-row gap-2">
                        {examplePrompts.slice(0, 3).map((prompt) => (
                            <Button key={prompt} variant="outline" size="sm" className="h-auto text-wrap text-left text-xs py-4" onClick={() => handlePromptClick(prompt)}>
                                {prompt}
                            </Button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                        id="question"
                        placeholder="Ej: ¿Qué base de datos se utilizó?"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        disabled={loading}
                    />
                    <Button type="submit" disabled={loading} size="icon">
                        {loading ? <Loader2 className="animate-spin" /> : <Send />}
                        <span className="sr-only">Enviar</span>
                    </Button>
                </form>

                {loading && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Loader2 className="animate-spin h-4 w-4" />
                        <span>La IA está pensando...</span>
                    </div>
                )}
            
                {answer && (
                    <div className="p-4 bg-secondary/80 rounded-md space-y-2 max-h-[450px] overflow-y-auto">
                        <p className="font-semibold text-foreground">Respuesta:</p>
                        <p className="whitespace-pre-wrap text-foreground/90">{answer}</p>
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
  );
}