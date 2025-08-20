
import { Briefcase, GraduationCap, Mail, Phone, Link as LinkIcon, Linkedin, Github, Twitter, ChevronsRight, Award, FolderGit2, Lightbulb, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ABOUTME, EDUCATION, SKILLS, SOCIAL_LINKS } from "@/lib/data/education";
import { EXPERIENCE } from "@/lib/data/experience";
import { formatExperienceTime } from "@/lib/utils";

const socialIcons: { [key: string]: LucideIcon } = {
    Github,
    Linkedin,
    Twitter,
};

const cvSections = [
    { id: 'experiencia', title: 'Experiencia Profesional', icon: Briefcase },
    { id: 'educacion', title: 'Educación', icon: GraduationCap },
    //{ id: 'proyectos', title: 'Proyectos', icon: FolderGit2 },
    { id: 'habilidades', title: 'Habilidades', icon: Lightbulb },
];

export default function CurriculumPage() {

    return (
        <div className="bg-muted/30">
            <div className="container max-w-7xl mx-auto py-12 md:py-24">
                <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-12">
                    <div className="bg-background shadow-lg rounded-lg overflow-hidden">
                        <div className="p-8 md:p-12 font-serif">
                            <header className="text-center border-b-2 border-foreground pb-4 mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-wider">Emanuel Cisterna</h1>
                                <p className="text-lg text-muted-foreground mt-2">Desarrollador Full-Stack</p>
                                <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-foreground/80">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        <span>emanuelcisterna@outlook.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        <span>+54 11 64340872</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link href="/" className="flex items-center gap-2 hover:text-primary">
                                            <LinkIcon className="h-4 w-4" />
                                            <span>emanuelcisterna.com</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-4 mt-3">
                                    {SOCIAL_LINKS.map(link => {
                                        const Icon = socialIcons[link.icon.displayName as keyof typeof socialIcons] || link.icon;
                                        return (
                                            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                                                <Icon className="h-5 w-5" />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </header>

                            <main className="space-y-10 font-sans">
                                <section id="aboutme">
                                    <h2 className="text-xl font-bold uppercase tracking-widest border-b border-foreground/30 pb-2 mb-4 font-serif">Sobre mí</h2>
                                    <p className="text-sm text-muted-foreground">{ABOUTME.description}</p>
                                </section>

                                <section id="experiencia">
                                    <h2 className="text-xl font-bold uppercase tracking-widest border-b border-foreground/30 pb-2 mb-4 font-serif">Experiencia Profesional</h2>

                                    {EXPERIENCE.map((job, index) => (
                                        <div key={index} className="mb-6">
                                            <div className="flex justify-between items-baseline flex-wrap">
                                                <h3 className="text-lg font-semibold text-foreground/90">{job.company}</h3>
                                                <p className="text-sm text-muted-foreground">{formatExperienceTime(job.time).time}</p>
                                            </div>
                                            <p className="text-md italic text-foreground/80">{job.title}</p>
                                            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{job.description}</p>
                                        </div>
                                    ))}
                                </section>

                                <section id="educacion">
                                    <h2 className="text-xl font-bold uppercase tracking-widest border-b border-foreground/30 pb-2 mb-4 font-serif">Educación</h2>
                                    {EDUCATION.filter(edu => edu.type == "UNIVERSITY").map((edu, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex justify-between items-baseline flex-wrap">
                                                <h3 className="text-lg font-semibold text-foreground/90">{
                                                    edu.institution ? edu.institution : edu.title
                                                }</h3>
                                                <p className="text-sm text-muted-foreground">{edu.time}</p>
                                            </div>
                                            <p className="text-md italic text-foreground/80">{
                                                edu.institution ? edu.title : edu.skills.join(", ")
                                            }</p>
                                        </div>
                                    ))}
                                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-foreground/30 pb-2 mb-4 font-serif">
                                        Cursos y certificaciones</h2>
                                    {EDUCATION.filter(edu => edu.type == "OTHER").map((edu, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex justify-between items-baseline flex-wrap">
                                                <h3 className="text-lg font-semibold text-foreground/90">{
                                                    edu.institution ? edu.institution : edu.title
                                                }</h3>
                                                <p className="text-sm text-muted-foreground">{edu.time}</p>
                                            </div>
                                            <p className="text-md italic text-foreground/80">{
                                                edu.institution ? edu.title : edu.skills.join(", ")
                                            }</p>
                                        </div>
                                    ))}
                                </section>

                                <section id="habilidades">
                                    <h2 className="text-xl font-bold uppercase tracking-widest border-b border-foreground/30 pb-2 mb-4 font-serif">Habilidades Técnicas</h2>
                                    <div>
                                        {SKILLS.map(item => (
                                            <div key={item.categoria} className="my-1 p-2">
                                                <h4 className="text-lg font-semibold text-foreground/90">
                                                    {item.categoria}
                                                </h4>
                                                 <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{item.items.join(", ")}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>

                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <h3 className="text-lg font-semibold mb-4 font-headline">Secciones</h3>
                            <nav>
                                <ul className="space-y-2">
                                    {cvSections.map(section => (
                                        <li key={section.id}>
                                            <Link href={`#${section.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                <section.icon className="h-4 w-4" />
                                                <span>{section.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Button asChild className="w-full mt-8 bg-gradient-to-r from-[#FD6585] to-[#0D25B9]">
                                <a href="/curriculum.pdf" download="Emanuel Cisterna.pdf">
                                    <Download className="mr-2 h-4 w-4" />
                                    Descargar CV
                                </a>
                            </Button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
