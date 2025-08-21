import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Divider } from '@/components/ui/Divider';
import { PROJECTS } from '@/lib/data/projects';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ImagesGridWithDialog } from '@/components/pages/proyectos/image-grid-with-dialog';
import { AiProjectChat } from '@/components/pages/proyectos/ai-project-chat';

export const dynamic = 'force-dynamic';

export default async function ProyectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  const allImages = [project.cover_image, ...project.images];
  const mainImages = project.images.slice(0, 3);
  const remainingImages = project.images.slice(3);

  const renderDate = () => {
    const formatted = format(project.date, 'MMMM yyyy', { locale: es });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
      <div>
        <header className="space-y-4 mb-12">
          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest mb-4 mt-2">
            {project.type}
          </p>
          <time className="truncate text-sm">{renderDate()}</time>
          <Divider className="my-6" />
        </header>

        <Image
          src={project.cover_image}
          width={1200}
          height={600}
          alt={`Cover image for ${project.title}`}
          className="rounded-lg shadow-lg mb-12 w-full object-cover aspect-video"
          data-ai-hint="abstract technology"
        />

        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold font-headline mb-4">Las necesidades del cliente</h2>
            <p>{project.content.customers_problem}</p>
          </section>

          <ImagesGridWithDialog
            images={mainImages}
            allImages={allImages}
            startOffset={1}
            layout="main"
          />

          {/* 3) Mi solución */}
          <section>
            <h2 className="text-3xl font-bold font-headline mb-4">Mi solución</h2>
            <p dangerouslySetInnerHTML={{ __html: project.content.solution }} />
          </section>

          {/* HTML adicional si existe */}
          {project.content.html && (
            <p dangerouslySetInnerHTML={{ __html: project.content.html }} />
          )}

          {/* 4) remainingImages */}
          <ImagesGridWithDialog
            images={remainingImages}
            allImages={allImages}
            startOffset={1 + mainImages.length}
            layout="remaining"
          />

          {/* Información técnica (como estaba) */}
          <section className="bg-secondary/50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold font-headline mb-4 border-b pb-2">
              Información Técnica
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-12 py-8">
              {project.content.technical_information.map((col) => (
                <div key={col.title}>
                  <h2 className="font-semibold text-xl mb-2">{col.title}:</h2>
                  <p dangerouslySetInnerHTML={{ __html: col.text }} />
                </div>
              ))}
            </div>
          </section>
           <AiProjectChat project={project} />
        </article>
      </div>

      <div className="mb-7 mt-7 flex justify-center">
        <Link
          className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
          href="/proyectos"
        >
          ← Ver otros proyectos
        </Link>
      </div>
    </main>
  );
}