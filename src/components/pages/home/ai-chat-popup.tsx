"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { askAboutMe } from "@/ai/flows/ask-about-me";

export function AiChatPopup() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const examplePrompts = [
    "¿Cuál es el proyecto más desafiante en el que ha trabajado John Doe?",
    "Resume la experiencia de John en el desarrollo Frontend.",
    "¿Qué tecnologías utilizó en el proyecto 'Plataforma E-commerce'?",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    try {
      const result = await askAboutMe({ question });
      setAnswer(result.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Lo lamento, ha ocurrido un error. Por favor, intentalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuestion(prompt);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="group relative z-50 flex items-center justify-center overflow-hidden text-wrap
              px-6 py-2 text-center font-semibold text-white shadow-md transition 
             hover:scale-110 hover:shadow-xl text-lg bg-[#006fee] rounded-none"
          style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}>
          <div className="width-full absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent
             via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
          <Bot className="mr-2" />
          Consultar a la IA
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] md:p-12">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="text-primary h-6 w-6" />
            Preguntale a mi Asistente de IA
          </DialogTitle>
          <DialogDescription>
            Podés preguntarle sobre mi experiencia, proyectos o habilidades. La IA responderá en base a la información de mi perfil.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Sugerencias de preguntas</h4>
            <div className="flex flex-col sm:flex-row gap-2 p-4">
              {examplePrompts.slice(0, 3).map((prompt) => (
                <Button key={prompt} variant="outline" size="sm" className="h-auto p-2 text-wrap text-left" onClick={() => handlePromptClick(prompt)}>
                  {prompt}
                </Button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              id="question"
              placeholder="Ej: ¿Cuántos años de experiencia tienes con React?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
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
            <div className="p-4 bg-secondary/50 rounded-md space-y-2">
              <p className="font-semibold text-foreground">Respuesta:</p>
              <p className="whitespace-pre-wrap text-foreground/90">{answer}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
