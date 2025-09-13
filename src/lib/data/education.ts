import { Github, Linkedin, LucideIcon } from "lucide-react";

type Educacion = {
    title: string;
    time: string;
    skills: string[];
    type: "UNIVERSITY" | "OTHER",
    institution?: string,
    description?: string; 
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
        institution: "Universidad nacional de la matanza",
        description: `Formación enfocada en el diseño y desarrollo de aplicaciones móviles multiplataforma, con un fuerte componente en arquitectura de
software, bases de datos, optimización de rendimiento y experiencia de usuario (UX). Durante la carrera trabajé en proyectos
aplicados que integran APIs, servicios en la nube y patrones de diseño, lo que me permitió adquirir una base técnica robusta en
programación e informática y potenciarla con prácticas colaborativas que simulan entornos de trabajo reales.`
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
            "Integración con modelos LLM (OpenIA, Gemini), Automatización de respuestas inteligentes, Desarrollo de asistentes con IA generativa, Exploración de casos de uso con IA aplicada"
        ]
    }
];

export const ABOUTME = {
    description: "Soy un desarrollador Full Stack con +4 años de experiencia creando aplicaciones web y móviles de alto impacto. Cuento con amplios conocimientos en React, Next.js, Node.js y React Native, con historial comprobado en proyectos que superaron las 70k descargas y 20k usuarios activos. Me tocó trabajar optimizando aplicaciones que pasaron de calificaciones negativas a superar las 4.2 estrellas, liderado desarrollos para clientes enterprise (YPF Ruta, Cencosud) y diseñado una plataforma multi-tenant con IA avanzada (Claude, Gemini) integrada a canales como WhatsApp, Telegram y WebChat. Disfruto colaborar activamente con mi equipo de trabajo para lograr soluciones sólidas y bien pensadas, convencido de que la innovación y el trabajo en conjunto son la clave para proyectos exitosos.",
    contact: "Linkedin: https://www.linkedin.com/in/emanuel-cisterna/, email: emanuelcisterna@outlook.com, telefono: +541164340872",
    personal: `Soy Emanuel, nací en el año 2000. Me encanta viajar de forma aventurera, hacer trekking y estar en contacto con la vida salvaje; recorrí Ushuaia, El Chaltén, Jujuy y Misiones, entre muchos mas destinos y siempre busco la próxima salida. También me apasionan la musculación y el crossfit: disfruto entrenar fuerte y superarme día a día. Soy muy de amigos: valoro las juntadas, las risas y juego fútbol amateur con ellos en nuestro equipo “trap n export”. Amo a mi familia —tengo un hermano y mis padres— y en casa me acompañan mis dos perras, Penny y Priya. Mis películas favoritas son Spider-Man 2 y Volver al futuro.`
}
