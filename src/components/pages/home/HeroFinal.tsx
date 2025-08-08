import Image from 'next/image'
import avatar from "../../../assets/emanuel.jpg";
import { AnimatedButton } from '@/components/ui/AnimatedButton';

export const HeroFinal = () => {
    return (
        <section className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 
        bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1]
         before:w-full before:h-full before:left-0 before:top-0"
            style={{ backgroundImage: `url("/bg23.jpg")` }}>

            <div className='container w-4/5 xxl:w-2/3 h-[70vh] m-auto flex justify-center items-center py-24'>
                <div className="flex flex-wrap mx-0 -mt-[50px] items-center text-center lg:text-left">
                    <div className="xl:w-6/12 lg:w-6/12 xxl:w-5/12 w-full relative mt-[50px]">
                        <img
                            src="https://sandbox-tailwind-template.netlify.app/assets/img/svg/doodle1.svg"
                            className="h-9 absolute hidden xl:block lg:block"
                            style={{ top: '-9%', left: '-6%' }}
                            alt="doodle"
                        />
                        <img
                            src="https://sandbox-tailwind-template.netlify.app/assets/img/svg/doodle2.svg"
                            className="h-20 absolute hidden xl:block lg:block"
                            style={{ bottom: '9%', right: '-22%' }}
                            alt="doodle"
                        />
                        <div className="flex gap-4 w-fit items-center mb-6">
                            <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                    alt="Emanuel Cisterna perfil"
                                    src={avatar}
                                    width={300} height={300}
                                    className="w-full object-contain"
                                />
                            </div>
                            <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener" className="flex items-center transition md:justify-center md:hover:scale-105">
                                <div className="flex items-center ">
                                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                                        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer  backdrop-blur-3xl whitespace-nowrap">
                                            Disponible para trabajar </div>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <h1 className="text-white mb-4 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline animate-slideInDownDelayed2">
                            Emanuel Cisterna{' '}
                        </h1>

                        <p className="text-white text-[1.2rem] leading-[1.5] font-normal mb-7 animate-slideInDownDelayed3">
                           Un apasionado desarrollador de software con experiencia en la creación de aplicaciones web modernas y escalables. Me encanta resolver problemas complejos y aprender nuevas tecnologías.
                        </p>
                        <div className="hidden lg:flex flex-col gap-2 min-[400px]:flex-row">
                            <AnimatedButton
                                link="/contacto"
                                title="Contacto"
                            />
                            <AnimatedButton
                                link="https://www.linkedin.com/in/emanuel-cisterna/"
                                title="Linkedin"
                            />
                        </div>
                    </div>

                    <div className="xl:w-6/12 lg:w-6/12 w-full ml-auto mt-[50px] mb-[-10rem] xxl:mb-[-15rem] animate-slideInDownDelayed1">
                        <figure className="m-0 p-0">
                            
                        </figure>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden z-[1]">
                <div className="divider text-[#fefefe] mx-[-0.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className='text-background'>
                        <g fill="currentColor">
                            <polygon points="1440 100 0 100 0 85 1440 0 1440 100"></polygon>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    )
}
