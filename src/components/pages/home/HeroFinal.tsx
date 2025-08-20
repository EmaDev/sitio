import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Testimonial } from './Testimonial';
import Image from 'next/image';
import avatar from "../../../assets/hero.jpg";
import devices from "../../../assets/device3.png";

const devicesImg = 'https://sandbox-tailwind-template.netlify.app/assets/img/photos/devices3.png'
const devicesImg2x = 'https://sandbox-tailwind-template.netlify.app/assets/img/photos/devices3.png'
const bgImage = 'https://sandbox-tailwind-template.netlify.app/assets/img/photos/bg23.png'



export const HeroFinal = () => {
    return (
        <section className="wrapper image-wrapper bg-full bg-image 
        bg-overlay bg-overlay-light-600 xl:[background-size:100%] 
        bg-[center_center] bg-no-repeat bg-scroll relative z-0  
        before:block before:absolute  before:w-full before:h-full before:left-0 before:top-0 "
            style={{ backgroundImage: `url(${bgImage})` }}>

            <div className='container w-4/5 xxl:w-2/3 h-[70vh] m-auto md:grid grid-cols-2 gap-12'>
                <div className='w-full pt-24'>
                    <div className="flex flex-wrap mx-0 -mt-[50px] items-center text-center lg:text-left gap-24 justify-between">
                        <div className=" w-full relative mt-[50px]">
                            <img
                                src="https://sandbox-tailwind-template.netlify.app/assets/img/svg/doodle1.svg"
                                className='h-9 !absolute hidden xl:block lg:block animate-fadeIn animate-delay-3000'
                                style={{ top: '-9%', left: '-6%' }}
                                alt="doodle"
                            />
                            <div className="hidden md:flex gap-4 w-fit items-center mb-6 animate-slideInDown animate-delay-1300">
                                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-gray-200 overflow-hidden">
                                    <Image
                                        alt="Emanuel Cisterna perfil"
                                        src={avatar}
                                        width={300} height={300}
                                        className="w-full object-contain"
                                    />
                                </div>
                                <a href="https://www.linkedin.com/in/emanuel-cisterna/" target="_blank" rel="noopener" className="flex items-center transition md:justify-center md:hover:scale-105">
                                    <div className="flex items-center ">
                                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                                            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer  backdrop-blur-3xl whitespace-nowrap">
                                                Disponible para trabajar </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <h1
                                className='text-black xl:!text-[2.5rem] !text-[calc(1.375rem_+_1.5vw)] font-semibold !leading-[1.15] !mb-4 animate-slideInDown animate-delay-1300'
                            >
                                <span className=''>Emanuel Cisterna</span>{' '}<br />
                                <span className='bg-gradient-to-r from-[#FD6585] to-[#0D25B9] bg-clip-text text-transparent'>
                                    Full Stack Developer.
                                </span>
                            </h1>

                            <div className='hidden md:block'>
                                <p className='text-black lead !text-[1.2rem] !leading-[1.5] !font-normal !mb-7 animate-slideInDown animate-delay-1600'>
                                    Un apasionado desarrollador de software con experiencia en la creación de aplicaciones web modernas y escalables. Me encanta resolver problemas complejos y aprender nuevas tecnologías.
                                </p>

                                <div
                                    className='flex gap-6 justify-center lg:!justify-start xl:!justify-start animate-slideInDown animate-delay-1800'
                                >
                                    <AnimatedButton
                                        link="/contacto"
                                        title="Contacto"
                                        className='bg-gradient-to-r from-[#FD6585] to-[#0D25B9] px-12'
                                    />
                                    <AnimatedButton
                                        link="https://www.linkedin.com/in/emanuel-cisterna/"
                                        title="Linkedin"
                                        className='bg-[#0D25B9] px-12'
                                    />
                                </div>
                            </div>

                            <Testimonial />
                        </div>
                    </div>

                </div>
                <div className='z-50 h-full  hidden md:flex animate-slideInDown animate-delay-1300'>
                    <Image
                        src={devices}
                        width={1000} height={1000}
                        alt=''
                        className='object-cover'
                    />
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
