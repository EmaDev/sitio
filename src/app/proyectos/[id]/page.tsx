import { Divider } from '@/components/ui/Divider';
import { PROJECTS } from '@/lib/data/projects';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import React from 'react'

export const dynamic = "force-dynamic";
export default async function ProyectPage({ params }: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params
    const project = PROJECTS.find(project => project.id === id);

    const renderDate = () => {
        const formatedDate = format(project!.date, "MMMM yyyy", { locale: es });

        return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
    }

    if (!project) {
        return (
            <h1 className='text-center py-24'>Proyecto no encontrado</h1>
        )
    }
    return (
        <>
            <main className='container mx-auto max-w-7xl pt-8 px-6 flex-grow'>

                <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {project?.title}
                </h1>
                <p className="text-sm font-bold uppercase tracking-widest mb-4 mt-2">{project?.type}</p>
                <time className="truncate text-sm" dateTime="2022-09-21T15:14:00.000Z">
                    {renderDate()}
                </time>
                <Divider className='my-6' />

                <p className='mt-12 w-full'>
                    {project?.content.opening}
                </p>


                <div className='flex flex-col md:flex-row gap-4 my-12'>
                    <div className='w-full h-64 md:h-[550px] bg-gray-200 rounded-md overflow-hidden'>
                        <Image
                            src={project!.cover_image}
                            alt="Nombre proyecto"
                            className="h-full object-cover"
                        />
                    </div>
                </div>

                <Divider className='my-4' />
                <section className=''>
                    <h2 className='text-2xl font-bold'>Las necesidades del cliente</h2>
                    <p className='md:columns-2 md:gap-6 md:text-justify py-8'>
                        {project?.content.customers_problem}
                    </p>
                </section>

                <section className='flex flex-col md:flex-row gap-4'>
                    {/*<div className={`w-full md:w-1/3 h-96 md:h-96 
                    bg-[${project.color}] rounded-md hover:scale-105 transition-all duration-150 overflow-hidden`}>
                        <Image
                            src={project!.images[0]}
                            alt="Nombre proyecto"
                            className="h-full w-full object-contain rounded-md m-auto"
                        />
                    </div>
                    <div className={`w-full md:w-1/2 h-96 md:h-96 
                    bg-[${project.color}] rounded-md hover:scale-105 transition-all duration-150 overflow-hidden`}>
                        <Image
                            src={project!.images[1]}
                            alt="Nombre proyecto"
                            className="h-full w-full object-contain rounded-md m-auto"
                        />
                    </div>*/}

                    {
                        project.images.slice(0, 3).map((image, index) => (
                            <div 
                            key={index}
                            className={`w-full h-96 md:h-96 
                                rounded-md hover:scale-105 
                                transition-all duration-150 overflow-hidden bg-[${project.color}]
                                ${(project.images.length < 3)
                                    ? "md:w-1/2"
                                    : index === 0 ? "md:w-1/3"
                                        : index === 1 ? "md:w-1/2" : "md:w-1/5"}`}>
                                <Image
                                    src={image}
                                    alt={project.title}
                                    className="h-full w-full object-contain rounded-md m-auto"
                                />
                            </div>
                        ))
                    }
                </section>

                <section className=' mt-12'>
                    <h2 className='text-2xl font-bold'>Mi solución</h2>
                    <div className='row-2 md:gap-6 md:text-justify py-8'>
                        {
                            <div dangerouslySetInnerHTML={{ __html: project!.content.solution }} />
                        }
                    </div>
                </section>
                {
                    project.content.html && <div dangerouslySetInnerHTML={{ __html: project!.content.html }} />
                }
                <Divider className='my-4' />

                <section className='grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center'>
                    {
                        project!.images.slice(3).map((image, index) => (
                            <div
                                key={index}
                                className='m-auto w-full h-32 md:h-64 rounded-md hover:scale-105 transition-all duration-150 overflow-hidde'>
                                <Image
                                    src={image}
                                    alt="Nombre proyecto"
                                    className="h-full w-full object-cover rounded-md"
                                />
                            </div>
                        ))
                    }
                </section>

                <Divider className='my-4' />

                <h2 className='text-2xl font-bold'>Informacion técnica</h2>
                <div className='grid md:grid-cols-2 gap-4 md:gap-12 py-8'>
                    {
                        project?.content.technical_information.map(col => (
                            <div key={col.title}>
                                <h2 className='font-semibold text-xl mb-2'>{col.title}:</h2>
                                {
                                    <p dangerouslySetInnerHTML={{ __html: col.text }} />
                                }
                            </div>
                        ))
                    }

                </div>

            </main>
        </>
    )

}