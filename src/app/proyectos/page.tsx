import { ProjectCard } from '@/components/pages/proyectos/project-card';
import { projects } from '@/lib/data';
import { PROJECTS } from '@/lib/data/projects';

export default function ProyectosPage() {
  return (
    <div className="container px-4 md:px-6 py-12 m-auto">
      <h1 className="text-3xl ml-6 font-bold tracking-tighter sm:text-5xl font-headline">Mis Proyectos</h1>
      <div className='mx-auto max-w-7xl my-12 pt-8 px-8 flex flex-col md:grid grid-cols-2 gap-6 mt-8 relative'>
        {
          PROJECTS.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              cover={project.cover_image}
              date={project.date}
            />
          ))
        }
      </div>
    </div>
  );
}
