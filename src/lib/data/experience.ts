import { Briefcase, LucideIcon } from "lucide-react"

interface IExperience {
    title: string
    icon: LucideIcon
    company: string
    time: {
        from: Date,
        to: Date,
    }
    items: string[]
    liteitems: string[]
    description: string
}

export const EXPERIENCE: IExperience[] = [
    {
        title: "Frontend Developer",
        icon: Briefcase,
        company: "Segurarse SA",
        time: {
            from: new Date("2024-04-01"),
            to: new Date(),
        },
        items: [
            "Desarrollo en Ionic para reporte de siniestros.",
            "Multicotizador con +15 aseguradoras integradas.",
            "Mejora de experiencia de usuario y conversión.",
            "Descarga y visualización de pólizas desde la app.",
        ],
        liteitems: [
            "App Ionic para reporte de siniestros",
            "Multicotizador de seguros en app",
            "Mejoras UX y conversión de clientes",
            "Descarga de pólizas desde la app",
        ],
        description: `
        <li>Optimicé una app híbrida (Ionic + Tailwind) que pasó de pésima calificación a superar las 4.2 estrellas, alcanzando +20k usuarios
        activos.</li>
        <li>Desarrollé módulos web en React.js para paneles administrativos y funcionalidades internas.</li>
        <li>Implementé mejoras de performance que redujeron los tiempos de carga en un gran porcentaje, aumentando la retención de
        usuarios.</li>
        <li>Participé en proyectos con clientes corporativos (YPF Ruta, Cencosud), garantizando escalabilidad y calidad en producción.</li>
        <li>Investigación y desarrollo en IA aplicada: integración de modelos LLM (OpenAI, Gemini) para asistentes inteligentes y
        automatización de respuestas.</li>
        `
    },
    {
        title: "Full Stack especializado en React Native y Node.js",
        icon: Briefcase,
        company: "NetOne Software",
        time: {
            from: new Date("2022-08-01"),
            to: new Date("2024-04-01"),
        },
        items: [
            "Apps móviles con React Native para Android e iOS.",
            "Microservicios con Node.js, Express y MongoDB.",
            "Testing con Jest, Supertest y Detox.",
            "Integración con APIs, JWTs, Firebase, push y Maps.",
            "Manejo de estados con Redux, Context y Zustand.",
            "Scrum como marco de trabajo ágil.",
            "Participación activa en equipos colaborativos.",
        ],
        liteitems: [
            "Apps móviles con React Native",
            "Backend con Node, Express y MongoDB",
            "Testing con Detox y Jest",
            "Scrum y trabajo en equipo",
        ],
        description: `
        <li>Desarrollé una app móvil con +70k descargas y +6k usuarios concurrentes, asegurando estabilidad bajo alta demanda.</li>
        <li>Backend basado en microservicios (Node.js, Express, MongoDB) con integración de APIs externas, JWT, Firebase y notificaciones
        push.</li>
        <li>Testing unitario y de UI con Jest y Detox, aumentando la cobertura en más del 80%.</li>
        <li>Manejo de estado avanzado con Redux, Context API y Zustand.</li>
        `
    },
    {
        title: "Web Developer",
        icon: Briefcase,
        company: "Netegia",
        time: {
            from: new Date("2021-07-01"),
            to: new Date("2022-08-01"),
        },
        items: [
            "Desarrollo de funcionalidades para un sistema ERP.",
            "Backend en Java con Spring e Hibernate.",
            "Pasarelas de pago como Mercado Pago y Decidir.",
            "Frontend en HTML, CSS, Bootstrap y jQuery.",
            "Pruebas con JUnit y Mockito.",
            "Optimización de bases de datos relacionales y no relacionales.",
            "Generación de documentación técnica y capacitación.",
            "Diseño de plantillas PDF para comprobantes y recibos.",
        ],
        liteitems: [
            "ERP con Java, Spring e Hibernate",
            "Frontend con Bootstrap y jQuery",
            "Pasarelas de pago integradas",
            "Documentación y plantillas PDF",
        ],
        description: 
        `
        <li>Desarrollo de sistemas ERP con Java, Spring e Hibernate.</li>
        <li>Integración de pasarelas de pago (Mercado Pago, Decidir).</li>
        <li>Creación de interfaces con HTML, CSS, Bootstrap, jQuery.</li>
        <li>Pruebas unitarias con JUnit y Mockito.</li>
        <li>Capacitación de usuarios y documentación técnica.</li>
        `
    },
    {
        title: "Programador Freelance",
        icon: Briefcase,
        company: "Freelance",
        time: {
            from: new Date("2021-07-01"),
            to: new Date(),
        },
        items: [
            "Desarrollo y mantenimiento de aplicaciones web y móviles.",
            "Desarrollo de API y servicios web.",
            "Maquetación de wireframes y diseño UI.",
            "Gestión de bases de datos relacionales y no relacionales.",
            "Estrategias SEO e integración con servicios externos.",
            "Pruebas unitarias y de integración.",
            "Despliegue en Vercel, Heroku y Firebase.",
            "Implementación de lógica de negocio completa.",
        ],
        liteitems: [
            "Aplicaciones web y móviles fullstack",
            "Despliegue en Firebase y Vercel",
            "Diseño UI e integración de APIs",
            "Pruebas unitarias e integración",
        ],
        description: "Desarrollador freelance full stack. Desarrollo de aplicaciones web y móviles, diseño de APIs y UIs personalizadas a partir de wireframes. SEO, pruebas unitarias y despliegue en servicios como Vercel, Firebase y Heroku. Gestión integral del proyecto: lógica de negocio, base de datos, interfaz y despliegue."
    },



];
