import React from 'react'
import { ProjectCard } from '../proyectos/project-card'
import { PROJECTS } from '@/lib/data/projects'
import { Divider } from '@/components/ui/Divider'
import { ButtonLink } from '@/components/ui/ButtonLink'

export const Projects = () => {
    return (
        <section id="testimonials" className="w-full pt-8 md:pt-12 lg:pt-24 bg-secondary/50">
            <div className="container px-4 md:px-6 m-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-12">Mis Proyectos</h2>
                    <div className="flex flex-col md:grid grid-cols-2 gap-6 mt-8 relative">
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
            </div>
            <div className='m-auto w-fit md:mt-6'>
                <ButtonLink text='Ver todos los proyectos' href='/proyectos'/>
            </div>
            <Divider className='my-8'/>
        </section>
    )
}
