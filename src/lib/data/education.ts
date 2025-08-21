import { Github, Linkedin, LucideIcon } from "lucide-react";

type Educacion = {
    title: string;
    time: string;
    skills: string[];
    type: "UNIVERSITY" | "OTHER",
    institution?: string
};

type Habilidad = {
    categoria: "Lenguajes" | "Frameworks y Librerías" | "Bases de Datos" | "Inteligencia Artificial";
    items: string[];
};

export const EDUCATION: Educacion[] = [
    {
        title: "Tecnicatura Universitaria en Desarrollo de Aplicaciones para Dispositivos Móviles - UNLaM",
        time: "Desde 2021",
        skills: ["Java", "Kotlin", "Android", "Diseño de apps", "Bases de datos", "APIs REST"],
        type: "UNIVERSITY",
        institution: "Universidad nacional de la matanza"
    },
    {
        title: "Principios SOLID y Clean Code - DevTalles",
        time: "2024",
        skills: ["SOLID", "Clean Code"],
        type: "OTHER"
    },
    {
        title: "Next.js: El framework de React para producción - Udemy",
        time: "2024",
        skills: ["Next.js", "Tailwind CSS", "Redux.js", "Firebase", "TypeScript", "Zustand"],
        type: "OTHER"
    },
    {
        title: "React Native: Aplicaciones nativas para iOS y Android - Udemy",
        time: "2024",
        skills: ["React Native", "Zustand", "Redux", "Firebase", "Android Studio", "Xcode", "TypeScript"],
        type: "OTHER"
    },
    {
        title: "PWA - Aplicaciones Web Progresivas: De cero a experto - Udemy",
        time: "2021",
        skills: ["PWA", "TypeScript"],
        type: "OTHER"
    },
    {
        title: "Curso completo Next.js - Udemy",
        time: "2022",
        skills: ["Next.js", "React", "SSR", "Routing", "Optimización"],
        type: "OTHER"
    },
    {
        title: "React de cero a experto - Udemy",
        time: "2021",
        skills: ["React", "Hooks", "Componentes", "Estado", "Routing"],
        type: "OTHER"
    },
    {
        title: "Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL",
        time: "2020",
        skills: ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL"],
        type: "OTHER"
    },
    {
        title: "Curso de SEO y Monetización Web - Bigseo academy",
        time: "2021",
        skills: ["SEO", "Monetización", "Marketing web"],
        type: "OTHER"
    }
];

export type SocialLink = {
  icon: LucideIcon;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
    { icon: Github, href: 'https://github.com/EmaDev' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/emanuel-cisterna/' },
];

export const SKILLS: Habilidad[] = [
    {
        categoria: "Lenguajes",
        items: [
            "TypeScript",
            "JavaScript",
            "Java",
            "SQL"
        ]
    },
    {
        categoria: "Frameworks y Librerías",
        items: [
            "React.js",
            "React Native",
            "Next.js",
            "Node.js",
            "Express.js",
            "Redux",
            "Zustand",
            "Tailwind CSS",
        ]
    },
    {
        categoria: "Bases de Datos",
        items: [
            "MongoDB",
            "MySQL",
            "Firebase"
        ]
    },
    {
        categoria: "Inteligencia Artificial",
        items: [
            "Integración con modelos LLM (OpenIA, Gemini)",
            "Automatización de respuestas inteligentes",
            "Desarrollo de asistentes con IA generativa",
            "Exploración de casos de uso con IA aplicada"
        ]
    }
];

export const ABOUTME = {
    description: "Soy un desarrollador full stack enfocado en construir aplicaciones web modernas, escalables y eficientes. Trabajo con tecnologías como React, Next.js y Node.js, priorizando la experiencia de usuario, el rendimiento y la calidad del código. Me interesa especialmente la inteligencia artificial aplicada y la automatización de procesos. Disfruto colaborar activamente con mi equipo de trabajo para lograr soluciones sólidas y bien pensadas.",
    contact: "Linkedin: https://www.linkedin.com/in/emanuel-cisterna/, email: emanuelcisterna@outlook.com, telefono: +541164340872",
    personal: `Soy Emanuel, nací en el año 2000. Me encanta viajar de forma aventurera, hacer trekking y estar en contacto con la vida salvaje; recorrí Ushuaia, El Chaltén, Jujuy y Misiones, entre muchos mas destinos y siempre busco la próxima salida. También me apasionan la musculación y el crossfit: disfruto entrenar fuerte y superarme día a día. Soy muy de amigos: valoro las juntadas, las risas y juego fútbol amateur con ellos en nuestro equipo “trap n export”. Amo a mi familia —tengo un hermano y mis padres— y en casa me acompañan mis dos perras, Penny y Priya. Mis películas favoritas son Spider-Man 2 y Volver al futuro.`
}
