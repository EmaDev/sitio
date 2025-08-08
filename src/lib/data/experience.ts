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
        description: "Desarrollador frontend enfocado en aplicaciones móviles y web. Desarrollo de una app híbrida para iOS y Android utilizando Ionic y Tailwind CSS, permitiendo a los usuarios gestionar sus pólizas de seguro, reportar siniestros y acceder a documentación clave. También participo en el desarrollo de módulos web utilizando React.js para paneles administrativos y funcionalidades internas. Adicionalmente, estoy involucrado en tareas de investigación y desarrollo en IA con OpenIA y Gemini, explorando casos de uso como automatización de respuestas, generación de contenido y asistentes inteligentes dentro de los productos de la empresa."
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
        description: "Desarrollador full stack especializado en React Native y Node.js. Construcción de aplicaciones móviles para Android y iOS utilizando React Native. Backend basado en microservicios con Node.js, Express y MongoDB. Implementación de testing unitario y de UI con Jest y Detox. Integración de servicios externos como APIs, JWTs, Firebase, notificaciones push y mapas. Manejo de estados con Redux, Context API y Zustand."
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
        description: "Desarrollador web para sistemas ERP utilizando Java, Spring e Hibernate. Integración de pasarelas de pago como Mercado Pago y Decidir. Desarrollo de interfaces atractivas con HTML, CSS, Bootstrap y jQuery. Pruebas unitarias con JUnit y Mockito. Documentación técnica y capacitación de usuarios."
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
