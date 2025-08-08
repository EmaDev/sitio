import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Testimonial } from './Testimonial';
import avatar from "../../../assets/emanuel.jpg";
import hero from "../../../assets/hero.jpg";

const skills = [
  {
    title: "+4 años de experiencia",
    position: "top-10 -left-24"
  },
  {
    title: "Web y Mobile",
    position: "bottom-10 -left-24"
  },
  {
    title: "Inteligencia Artificial",
    position: "top-24 -right-24"
  },
  {
    title: "Clean Code | Clean Architecture",
    position: "bottom-24 -right-24"
  }
]
export function Hero() {
  return (
    <section className="w-full lg:h-[95vh] relative bg-[#1e283c] dark:bg-[#1e283c]
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      md:p-12">
      <div className="container px-4 md:px-6 py-12 m-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-4 w-fit items-center md:mb-6">
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
                    <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                      Disponible para trabajar </div>
                  </span>
                </div>
              </a>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline animate-slideInDownDelayed2">
                Emanuel Cisterna
              </h1>
              <p className="text-xl  font-semibold">Desarrollador Full-Stack</p>
              <p className="hidden lg:flex max-w-[600px]  md:text-xl">
                Un apasionado desarrollador de software con experiencia en la creación de aplicaciones web modernas y escalables. Me encanta resolver problemas complejos y aprender nuevas tecnologías.
              </p>
            </div>
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
            <Testimonial />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className='relative'>
              <Image
                src={hero}
                width="800"
                height="800"
                alt="Profile picture"
                className="rounded-md object-cover w-64 h-64 
              md:w-80 md:h-80 xxl:w-96 lg:h-96 border-2 z-10  
              shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                data-ai-hint="profile picture"
              />

              {
                skills.map(skill => (
                  <span
                    key={skill.title}
                    className={
                      `absolute bg-white text-black p-2 px-4 cursor-pointer border shadow-lg 
                       ${skill.position}`} 
                    style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}
                  >
                    {skill.title}
                  </span>
                ))
              }


            </div>

          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-32 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-12 w-12 text-primary-foreground/50 animate-bounce" />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-background"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      ></div>
    </section>
  );
}