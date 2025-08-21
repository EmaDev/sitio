import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AiChatPopup } from "./ai-chat-popup";
import { aboutMeQandA } from "@/lib/data";

export function AboutMe() {
    return (
        <section id="about-me" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 m-auto">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Sobre Mí</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Algunas preguntas frecuentes que me suelen hacer. Si tienes alguna otra duda, ¡no dudes en preguntarle a mi asistente de IA!
                        </p>
                         <AiChatPopup />
                    </div>
                    <div className="flex items-center">
                        <Accordion type="single" collapsible className="w-full">
                            {aboutMeQandA.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
