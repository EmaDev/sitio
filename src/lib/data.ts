
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Twitter, Briefcase, GraduationCap } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
};

export type Experience = {
  icon: LucideIcon;
  title: string;
  company: string;
  date: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

export type SocialLink = {
  icon: LucideIcon;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  camera: string;
  latitude: number;
  longitude: number;
  tags: string[];
}

export type AboutMeQandA = {
    question: string;
    answer: string;
}

export const aboutMeQandA: AboutMeQandA[] = [
    {
        question: "¿Cuál es tu principal motivación en el desarrollo de software?",
        answer: "Mi mayor motivación es resolver problemas complejos y crear soluciones eficientes que tengan un impacto positivo en la vida de las personas. Me apasiona el proceso de transformar una idea en un producto tangible y funcional, aprendiendo constantemente nuevas tecnologías en el camino."
    },
    {
        question: "¿Qué tipo de proyectos disfrutas más?",
        answer: "Disfruto especialmente los proyectos que presentan un desafío técnico y me permiten trabajar con arquitecturas modernas. Me siento muy cómodo en entornos colaborativos donde puedo aportar ideas y aprender de mis compañeros para construir un producto robusto y escalable."
    },
    {
        question: "¿Cómo te mantienes actualizado con las nuevas tecnologías?",
        answer: "Soy un entusiasta del aprendizaje continuo. Dedico tiempo regularmente a leer blogs de tecnología, seguir a referentes de la industria en redes sociales, realizar cursos en línea y experimentar con nuevas herramientas en proyectos personales. Creo que es fundamental para mantenerme relevante en un campo tan dinámico."
    },
    {
        question: "¿Cuál es tu enfoque para el trabajo en equipo?",
        answer: "Creo en la comunicación abierta y la colaboración como pilares de un equipo exitoso. Me esfuerzo por ser un miembro proactivo, compartiendo mis conocimientos, escuchando las opiniones de los demás y buscando siempre el consenso para lograr los objetivos comunes del proyecto."
    }
]


export const blogTags = ['Todos', 'Favoritos', 'Ushuaia', 'Mar del Plata', 'Iguazú'];


export const blogPosts: BlogPost[] = [
    {
        slug: 'glaciar-vinciguerra',
        title: 'Glaciar Vinciguerra',
        date: '2024-06-21',
        image: 'https://placehold.co/600x800.png',
        camera: 'Google Pixel 8 Pro f/1.68 . 1/228 . 6,9mm . ISO69',
        latitude: -54.728,
        longitude: -68.336,
        tags: ['Ushuaia', 'Favoritos']
    },
    {
        slug: 'faro-les-eclaireurs',
        title: 'Faro Les Éclaireurs',
        date: '2024-06-20',
        image: 'https://placehold.co/600x800.png',
        camera: 'Google Pixel 8 Pro f/1.68 . 1/150 . 6,9mm . ISO50',
        latitude: -54.87,
        longitude: -68.25,
        tags: ['Ushuaia']
    },
    {
        slug: 'playa-del-centro-mardel',
        title: 'Playa Bristol',
        date: '2024-01-15',
        image: 'https://placehold.co/600x800.png',
        camera: 'DJI Mini 3 Pro f/1.7 . 1/500 . 6.7mm . ISO100',
        latitude: -38.0055,
        longitude: -57.5362,
        tags: ['Mar del Plata', 'Favoritos']
    },
    {
        slug: 'garganta-del-diablo',
        title: 'Garganta del Diablo',
        date: '2023-09-28',
        image: 'https://placehold.co/600x800.png',
        camera: 'Sony A7III f/4.0 . 1/1000 . 24mm . ISO100',
        latitude: -25.6953,
        longitude: -54.4367,
        tags: ['Iguazú', 'Favoritos']
    },
     {
        slug: 'torreon-del-monje',
        title: 'Torreón del Monje',
        date: '2024-01-18',
        image: 'https://placehold.co/600x800.png',
        camera: 'DJI Mini 3 Pro f/1.7 . 1/320 . 6.7mm . ISO100',
        latitude: -38.016,
        longitude: -57.5342,
        tags: ['Mar del Plata']
    },
    {
        slug: 'salto-bossetti',
        title: 'Salto Bossetti',
        date: '2023-09-27',
        image: 'https://placehold.co/600x800.png',
        camera: 'Sony A7III f/5.6 . 1/500 . 50mm . ISO100',
        latitude: -25.6923,
        longitude: -54.4407,
        tags: ['Iguazú']
    },
     {
        slug: 'isla-de-los-pajaros',
        title: 'Isla de los Pájaros',
        date: '2024-06-22',
        image: 'https://placehold.co/600x800.png',
        camera: 'Google Pixel 8 Pro f/1.68 . 1/200 . 6,9mm . ISO55',
        latitude: -54.86,
        longitude: -68.3,
        tags: ['Ushuaia']
    },
     {
        slug: 'puerto-mardel',
        title: 'Puerto de Mar del Plata',
        date: '2024-01-20',
        image: 'https://placehold.co/600x800.png',
        camera: 'DJI Mini 3 Pro f/1.7 . 1/400 . 6.7mm . ISO100',
        latitude: -38.0333,
        longitude: -57.5333,
        tags: ['Mar del Plata']
    }
];


export const projects: Project[] = [
  {
    slug: 'plataforma-ecommerce',
    title: 'Plataforma E-commerce',
    description: 'Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de productos.',
    longDescription: 'Este proyecto es una solución de e-commerce full-stack construida con las últimas tecnologías. Presenta un diseño moderno y responsivo, un flujo de pago seguro integrado con Stripe y un panel de administración para gestionar productos, pedidos y clientes. El objetivo era crear una experiencia de compra fluida y eficiente tanto para el cliente como para el administrador.',
    date: '2023-10-01',
    image: 'https://placehold.co/1200x600.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'dashboard-analiticas',
    title: 'Dashboard de Analíticas',
    description: 'Un dashboard interactivo para visualizar datos complejos de manera clara y concisa.',
    longDescription: 'Dashboard de analíticas que consume datos de una API para presentar visualizaciones interactivas. Utiliza Recharts para los gráficos y ShadCN UI para los componentes, ofreciendo una experiencia de usuario limpia y funcional. Permite a los usuarios filtrar datos por fecha y categoría para obtener insights específicos.',
    date: '2023-05-15',
    image: 'https://placehold.co/1200x600.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'TanStack Query'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'blog-personal',
    title: 'Blog Personal con CMS',
    description: 'Un blog personal con un sistema de gestión de contenidos (CMS) para una fácil publicación.',
    longDescription: 'Un blog personal minimalista y rápido construido con Astro y Markdoc. Se integra con un CMS headless como Sanity o Contentful para permitir la creación y edición de contenido sin necesidad de tocar el código. El diseño está enfocado en la legibilidad y la velocidad de carga.',
    date: '2022-12-20',
    image: 'https://placehold.co/1200x600.png',
    technologies: ['Astro', 'Markdoc', 'Tailwind CSS', 'Sanity.io'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const experience: Experience[] = [
  {
    icon: Briefcase,
    title: 'Desarrollador Full-Stack',
    company: 'Tech Solutions Inc.',
    date: 'Ene 2021 - Presente',
    description: 'Desarrollo y mantenimiento de aplicaciones web usando React, Node.js y GraphQL. Lideré la migración del frontend a Next.js, mejorando el rendimiento en un 40%.',
  },
   {
    icon: Briefcase,
    title: 'Desarrollador Frontend',
    company: 'Innovate Co.',
    date: 'Jun 2020 - Dic 2020',
    description: 'Creación de interfaces de usuario interactivas y responsivas para clientes de diversas industrias, utilizando Vue.js y SCSS.',
  },
  {
    icon: GraduationCap,
    title: 'Grado en Ingeniería Informática',
    company: 'Universidad Politécnica',
    date: 'Sep 2016 - Jun 2020',
    description: 'Especialización en desarrollo de software y sistemas de información. Proyecto de fin de grado sobre aplicaciones en tiempo real con WebSockets.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Project Manager en Tech Solutions Inc.',
    avatar: 'https://placehold.co/100x100.png',
    text: 'Trabajar con él fue una experiencia increíble. Su profesionalismo, atención al detalle y habilidades técnicas son de primer nivel. Siempre entrega resultados de alta calidad a tiempo.',
  },
  {
    name: 'Luis Martínez',
    role: 'Diseñador UX/UI',
    avatar: 'https://placehold.co/100x100.png',
    text: 'Tiene una gran capacidad para transformar diseños complejos en interfaces funcionales y atractivas. Su comunicación es clara y siempre está dispuesto a colaborar para encontrar la mejor solución.',
  },
   {
    name: 'Carla Pérez',
    role: 'CEO en Innovate Co.',
    avatar: 'https://placehold.co/100x100.png',
    text: 'Un desarrollador excepcional que aportó un valor inmenso a nuestro equipo. Su pasión por la tecnología y su compromiso con la excelencia son evidentes en cada proyecto que aborda.',
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Twitter, href: 'https://twitter.com' },
];

export const professionalProfileData = {
    name: "John Doe",
    title: "Desarrollador Full-Stack",
    experience: experience.map(e => ({ title: e.title, company: e.company, date: e.date, description: e.description })),
    projects: projects.map(p => ({ title: p.title, description: p.description, technologies: p.technologies })),
    skills: [...new Set(projects.flatMap(p => p.technologies))],
}
