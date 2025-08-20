import React from 'react'
import { ProjectCard } from '../proyectos/project-card'
import { PROJECTS } from '@/lib/data/projects'
import { Divider } from '@/components/ui/Divider'
import { ButtonLink } from '@/components/ui/ButtonLink'

export const Projects = () => {
    return (
        <>
            <div className="overflow-hidden">
                <div className="mx-[-0.5rem] text-[#e0e0e0] dark:text-[#080e23] h-[90px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 100"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        {/* Diagonal de abajo-izq a arriba-der */}
                        <polygon points="0,100 1440,0 1440,100" fill="currentColor" />
                    </svg>
                </div>
            </div>
            <section id="testimonials" className="w-full pt-8 md:pt-12 lg:pt-24 
            bg-[linear-gradient(180deg,_#e0e0e0,_rgba(8,14,35,0)_100%)]
            dark:bg-[linear-gradient(180deg,_#080e23,_rgba(8,14,35,0)_100%)]"
                >
                <div className="container px-4 md:px-6 m-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-12">Mis Proyectos</h2>
                        <div className="flex flex-col md:grid grid-cols-2 2xl:grid-cols-3 gap-6 mt-8 relative">
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
                <div className='m-auto w-fit md:mt-6 pb-8'>
                    <ButtonLink text='Ver todos los proyectos' href='/proyectos' />
                </div>
                <Divider className='' />
            </section>
        </>
    )
}
