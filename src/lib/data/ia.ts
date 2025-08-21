import { ABOUTME, EDUCATION } from "./education";
import { EXPERIENCE } from "./experience";
import { PROJECTS } from "./projects";
import { TESTIMONIAL } from "./testimonial";

export const professionalProfileData = {
    name: "Emanuel Cisterna",
    title: "Desarrollador Full-Stack",
    experience: EXPERIENCE,
    projects: PROJECTS,
    education: EDUCATION,
    testimonial: TESTIMONIAL,
    skills: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Firebase Firestore",
        "Zustand",
        "Azure DevOps",
        "Playwright",
        "Integraciones OpenAI",
        "Mercado Pago",
        "React Native",
        "Java",
        "Tailwind",
        "Mongo",
        "Mysql",
    ],
    about: {
        ...ABOUTME
    }
}