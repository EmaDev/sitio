import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import {
  CalendarDays,
  Layers3,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from 'lucide-react';
import { format } from 'date-fns';
import { PROJECTS } from '@/lib/data/projects';
import { AiProjectChat } from '@/components/pages/proyectos/ai-project-chat';
import Link from 'next/link';
import { es } from 'date-fns/locale';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

function getDifficultyIcon(difficulty: 'low' | 'mid' | 'high') {
  switch (difficulty) {
    case 'low':
      return <SignalLow className="h-4 w-4 mr-1.5" />;
    case 'mid':
      return <SignalMedium className="h-4 w-4 mr-1.5" />;
    case 'high':
      return <SignalHigh className="h-4 w-4 mr-1.5" />;
  }
}
export const dynamic = 'force-dynamic';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const renderDate = () => {
    const formatted = format(project.date, 'MMMM yyyy', { locale: es });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <article>
      <header className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={project.cover_image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          data-ai-hint="hero image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </header>

      <div className="container mx-auto -mt-24 md:-mt-32 relative z-10 px-4">
        <div className="max-w-6xl mx-auto rounded-lg bg-card shadow-lg p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags!.map((tag) => (
              <Badge key={tag} variant="default" style={{ backgroundColor: project.color, color: 'white' }}>
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Layers3 className="h-4 w-4 mr-1.5" /> {project.type}
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" /> Publicado en: {renderDate()}
            </div>

          </div>

        </div>
      </div>

      <div className="prose prose-lg max-w-6xl mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold mb-4">Introducción</h2>
          <p className="text-lg">{project.content.opening}</p>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold mb-4">Las necesidades del cliente</h2>
          <p>{project.content.customers_problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold mb-4">Mi solución</h2>
          <p>{project.content.solution}</p>
        </section>

        {project.content.html && (
          <>
            <Separator className="my-12" />
            <section className="mb-12 prose prose-sm md:prose-base"
              dangerouslySetInnerHTML={{ __html: project.content.html }}
            />
          </>
        )}

        {project.images.length > 0 && (
          <div className='hidden md:block'>
            <Separator className="my-12" />
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                    <Image src={img} alt={`Content image ${index + 1}`} fill className="object-cover" data-ai-hint="content image" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        <div className="mt-8 space-y-8 md:hidden">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {project.images.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md not-prose">
                          <Image src={item} alt={`Content image ${index + 1}`} fill className="object-cover" />
                        </div>
                      </div>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {project.video && (
          <>
            <Separator className="my-12" />
            <section>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={project.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </>
        )}

        {project.content.technical_information.length > 0 && (
          <>
            <Separator className="my-12" />
            <section className="mb-12">
              <h2 className="font-headline text-3xl font-bold mb-4">Información Técnica</h2>
              <Accordion type="single" collapsible className="w-full">
                {project.content.technical_information.map((info, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-semibold text-lg">{info.title}</AccordionTrigger>
                    <AccordionContent className="text-base">
                      <p dangerouslySetInnerHTML={{ __html: info.text }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </>
        )}

        <AiProjectChat project={project} />

      </div>
      <div className="mb-7 mt-7 flex justify-center">
        <Link
          className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
          href="/proyectos"
        >
          ← Ver otros proyectos
        </Link>
      </div>
    </article>
  );
}