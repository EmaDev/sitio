import { StaticImageData } from "next/image";
//Ecommerce
import miniatura_ecommerce from "../../assets/projects/miniatura.jpg";
import ecommerce_1 from "../../assets/projects/gestion.jpg";
import ecommerce_2 from "../../assets/projects/ventas.jpg";
import ecommerce_3 from "../../assets/projects/qr.jpg";
import ecommerce_4 from "../../assets/projects/login.jpg";
import ecommerce_5 from "../../assets/projects/carrito.jpg";
import ecommerce_6 from "../../assets/projects/articulo.jpg";
import ecommerce_7 from "../../assets/projects/cupon.jpg";
import ecommerce_8 from "../../assets/projects/config.jpg";
//

//Prode
import miniatura_prode from "../../assets/projects/prode/banner-prode.jpg"
import prode_1 from "../../assets/projects/prode/screens.jpg"
import prode_2 from "../../assets/projects/prode/creador.jpg"
//

//Notificaciones
import miniatura_notificaciones from "../../assets/projects/notificaciones/banner-push.jpg"
import notificaciones1 from "../../assets/projects/notificaciones/service.jpg"
import notificaciones2 from "../../assets/projects/notificaciones/phone.png"
//

//Fonobus
import miniatura_fono from "../../assets/projects/fono/banner-reservas.jpg"
import fono1 from "../../assets/projects/fono/mapa.jpg"
import fono2 from "../../assets/projects/fono/reserva.jpg"
import fono3 from "../../assets/projects/fono/hombre.png"
import fono4 from "../../assets/projects/fono/creditos.jpg"
import fono5 from "../../assets/projects/fono/login.jpg"
//

export interface IProject {
    id: string;
    title: string;
    type: string;
    difficult: "high" | "low" | "mid";
    cover_image: StaticImageData;
    date: Date;
    color: string;
    content: {
        opening: string;
        customers_problem: string;
        solution: string;
        technical_information: {
            title: string;
            text: string;
        }[];
        html?: any
    }
    images: StaticImageData[];
    video?: any;
    tags: string[];
}


export const PROJECTS: IProject[] = [
    {
        id: "ecommerce-gastronomia",
        title: "Plataforma digital para gastronomía: pedidos online + panel de gestión",
        type: `Sitio web`,
        difficult: "high",
        cover_image: miniatura_ecommerce,
        date: new Date("2024-05-01"),
        color: "#d1965e",
        tags: [],
        content: {
            opening: `Esta plataforma fue diseñada y desarrollada con el objetivo de ofrecer una solución 
      completa para el sector gastronómico, combinando un sistema de pedidos online accesible desde 
      dispositivos móviles, con un panel administrador (ERP) potente y fácil de usar para la gestión interna. 
      Desde el inicio, se priorizó una arquitectura modular, escalable y centrada en la experiencia de usuario.`,
            customers_problem: `
      El cliente necesitaba una herramienta que digitalizara la operación sin complejidad, permitiéndole recibir 
      pedidos online tanto para retiro como para entrega, con un flujo de compra ágil y moderno que incluya carrito, 
      variantes y promociones. También era fundamental contar con un panel de administración unificado desde donde 
      gestionar fácilmente productos, categorías, precios, promociones y el historial de ventas, todo actualizado 
      en tiempo real para reflejar los cambios de forma inmediata sin depender de procesos manuales. Además, surgió 
      la necesidad de ofrecer una versión simplificada del menú pensada para clientes presenciales. Esta vista, 
      accesible mediante un código QR desde la mesa, permite visualizar la carta sin necesidad de pasar por un
       proceso de compra. Esta funcionalidad debía mantenerse sincronizada con el ecommerce, de modo que cualquier
        modificación hecha desde el panel se reflejara automáticamente en ambas versiones del menú.
      `,
            solution: `
      Para dar respuesta a estas necesidades, desarrollé una plataforma integral dividida en dos grandes módulos: un 
      ecommerce funcional y un panel de administración robusto. El ecommerce permite a los usuarios realizar pedidos personalizados, 
      seleccionando productos, variantes y promociones mediante un flujo de carrito intuitivo y fluido. Todo el proceso está diseñado para ser rápido, claro y adaptable tanto a desktop como mobile, permitiendo completar un pedido desde cualquier dispositivo de forma eficiente.
      <br/><br/>
      Por otro lado, el panel de administración fue construido con un enfoque en la usabilidad y el control total del negocio. 
      Desde allí, el equipo puede gestionar en tiempo real productos, categorías, ventas, cupones y configuraciones clave. 
      Cada cambio realizado se refleja automáticamente tanto en la tienda online como en la versión simplificada del menú, 
      lo que asegura coherencia en la información sin necesidad de pasos intermedios. Esta solución no solo optimiza la gestión 
      operativa, sino que también mejora la experiencia del cliente final, tanto remoto como presencial.
      `,
            technical_information: [
                {
                    title: "Tecnologías utilizadas",
                    text: `<strong>Next.js 14 (App Router):</strong> Aprovechando su enfoque híbrido SSR/CSR para rendimiento óptimo y experiencia fluida.<br />
         <strong>Firebase:</strong><br />
         &nbsp;&nbsp;- <em>Firestore:</em> Base de datos en tiempo real.<br />
         &nbsp;&nbsp;- <em>Auth:</em> Autenticación segura.<br />
         &nbsp;&nbsp;- <em>Security Rules:</em> Validación basada en roles.<br />
         <strong>TypeScript:</strong> Para garantizar seguridad y mantenibilidad del código.<br />
         <strong>Zustand (con persistencia):</strong> Para el estado del carrito y la sesión.<br />
         <strong>Tailwind CSS:</strong> Para un diseño limpio y responsivo.<br />
         <strong>Heroui:</strong> Para el sistema de diseño y componentes reutilizables.<br />
         <strong>React Hook Form:</strong> Validación eficiente y segura.<br />`,
                },
                {
                    title: "Autenticación y seguridad",
                    text: `El sistema utiliza Firebase Auth para registrar y autenticar usuarios. Al iniciar sesión, se genera un token que se guarda en la cookie segura __session.
         Este token es luego verificado desde el servidor (en las rutas protegidas como /admin) para garantizar que el usuario esté logueado antes de cargar cualquier dato sensible.
         <br /><strong>Las reglas de Firestore fueron configuradas para que:</strong><br />
         &nbsp;&nbsp;- Usuarios no autenticados puedan leer información pública (como productos y promociones).<br />
         &nbsp;&nbsp;- Y únicamente los usuarios validados puedan escribir en otras colecciones protegidas.<br />`
                },
            ]
        },
        images: [
            ecommerce_1,
            ecommerce_2,
            ecommerce_3,
            ecommerce_4,
            ecommerce_5,
            ecommerce_6,
            ecommerce_7,
            ecommerce_8,
        ]
    },

    {
        id: "prode-app",
        type: "Aplicacion",
        title: "Aplicación Prode Qatar 2022",
        date: new Date("2022-09-01"),
        difficult: "mid",
        cover_image: miniatura_prode,
        color: "#67af8d",
        images: [
            prode_1,
            prode_2,
        ],
        tags: [],
        content: {
            opening: "Durante el Mundial de Qatar 2022, desarrollé una aplicación que combinó la emoción del fútbol con la competencia entre amigos: Prode Mundial Qatar 2022. Esta plataforma, construida con React Native, permitió a los usuarios vivir el torneo de una forma más interactiva, haciendo sus propias predicciones y compitiendo entre sí en salas privadas.",
            customers_problem: `El cliente necesitaba una plataforma digital que permitiera organizar competencias de pronósticos entre grupos cerrados de personas, de forma simple, intuitiva y sin necesidad de depender de hojas de cálculo ni canales informales de comunicación.

Buscaba una solución que ofreciera salas privadas para que cada grupo pudiera jugar de forma independiente, con un sistema que permitiera a cada participante cargar sus predicciones y seguir la evolución del torneo. Era fundamental que el sistema calculara automáticamente los puntos según los aciertos, y que el ranking se actualizara sin intervención manual.

También era importante que los usuarios pudieran comparar sus predicciones con las de otros dentro de la sala, generando así una experiencia social y competitiva más rica. La aplicación debía ser rápida, accesible desde cualquier dispositivo móvil, y lo suficientemente clara como para ser utilizada por personas de distintos niveles de familiaridad con la tecnología.

En definitiva, se trataba de transformar una dinámica de juego tradicional en una experiencia digital moderna, confiable y atractiva, sin perder su esencia.`,
            solution: `Cada usuario podía crear o unirse a salas privadas, invitando a sus amigos, familia o compañeros de trabajo para compartir la emoción del Mundial. Dentro de cada sala, cada participante tenía la posibilidad de completar su propio fixture, eligiendo los resultados de cada partido desde la fase de grupos hasta la gran final.

Una de las funcionalidades más valoradas fue la posibilidad de ver el fixture de otros jugadores dentro de la sala, lo que generaba conversaciones, comparaciones y competencia sana entre los participantes. Esta mecánica no solo hacía más entretenido el seguimiento del torneo, sino que reforzaba el espíritu de comunidad.

A medida que avanzaban las etapas del Mundial y se confirmaban los resultados reales, la app se encargaba de calcular automáticamente los puntos de cada usuario en función de la precisión de sus pronósticos. El ranking se actualizaba en tiempo real, permitiendo que todos pudieran ver al instante su posición frente a los demás, generando una competencia constante y emocionante.

Todo esto en una interfaz moderna, clara y adaptable a cualquier dispositivo móvil, diseñada para que cualquiera pudiera sumarse y disfrutar sin complicaciones técnicas.`,
            technical_information: [{
                title: "Tecnologías utilizadas",
                text: `<ul>
    <li><strong>Framework:</strong> React Native CLI</li>
    <li><strong>Base de datos:</strong> Firebase Firestore</li>
    <li><strong>Autenticación:</strong> Firebase Authentication</li>
    <li><strong>Estilos:</strong> styled-components</li>
    <li><strong>Plataforma:</strong> Aplicación móvil (iOS y Android)</li>
  </ul>`
            },
            {
                title: "Control de puntuación",
                text: `<p>
    Para llevar el control de las predicciones, se desarrolló un pequeño programa que registraba los resultados reales de cada partido. A medida que se cargaban esos resultados, el sistema comparaba automáticamente los pronósticos de cada jugador y actualizaba su puntaje en base a la precisión de sus elecciones. Esto permitía mantener el ranking siempre actualizado sin necesidad de intervención manual.
  </p>`
            }]
        }
    },
    {
        id: "microservicio-notificaciones",
        type: "microservicio",
        title: "Microservicio de notificaciones",
        color: "#2a8ee5",
        difficult: "mid",
        cover_image: miniatura_notificaciones,
        date: new Date("2023-08-01"),
        images: [
            notificaciones1,
            notificaciones2
        ],
        tags: [],
        content: {
            opening: `En el desarrollo moderno de aplicaciones, las notificaciones dejaron de ser un simple canal de alertas. Por eso creamos Asistente de Notificaciones, un servicio avanzado que no solo envía mensajes, sino que también permite ejecutar acciones específicas y enriquecer la experiencia del usuario directamente desde el front-end que lo utilice.

Este sistema está pensado como una herramienta modular, escalable y segura, capaz de integrarse fácilmente a distintos proyectos y adaptarse a las necesidades particulares de cada uno.`,
            customers_problem: `El cliente requería una solución que fuera mucho más allá del envío clásico de notificaciones push. Necesitaba un sistema que permitiera comunicar información relevante a los usuarios de forma dinámica, segura y controlada, con la capacidad de ejecutar acciones específicas al recibir un mensaje.

Además, era imprescindible contar con un sistema de autenticación robusto que garantizara que solo usuarios verificados pudieran acceder a las funcionalidades del servicio. El cliente también buscaba una solución confiable que asegurara la entrega puntual y precisa de cada notificación, incluso en escenarios de alto volumen o múltiples dispositivos conectados.`,
            solution: `Para resolver este desafío, desarrollé Asistente de Notificaciones, un servicio backend capaz de enviar tanto notificaciones push simples como mensajes enriquecidos que activan acciones concretas en el front-end receptor. Esto permite a las aplicaciones que lo integren no solo informar al usuario, sino también modificar comportamientos de la interfaz, mostrar contenido contextual o disparar funcionalidades específicas según el mensaje recibido.

La seguridad fue una prioridad desde el inicio. Por eso implementé OAuth como sistema de autenticación, permitiendo que solo usuarios autorizados puedan acceder a las rutas del servicio, manteniendo los datos protegidos y controlando el flujo de mensajes.

Para la mensajería, integré Firebase Cloud Messaging, un sistema confiable, eficiente y ampliamente probado, que se encarga de que cada notificación llegue al dispositivo correcto, sin pérdida ni retrasos.

Todo el servicio fue construido con tecnologías modernas, orientado a la escalabilidad y con una arquitectura sólida, lista para crecer junto con los proyectos que lo integren.

Sin embargo, ningún desarrollo está completo sin una buena anécdota: durante las primeras pruebas internas, cometimos un pequeño error que desencadenó un bucle infinito de envío de notificaciones. Los usuarios de test comenzaron a recibir cientos de notificaciones idénticas en cuestión de segundos, hasta el punto en que sus dispositivos se volvieron inusables, vibrando sin parar hasta que detuvimos manualmente el servidor. Fue caótico, pero también una experiencia invaluable que nos recordó la importancia de implementar validaciones sólidas y mecanismos de control desde el inicio.`,
            technical_information: [{
                title: "Tecnologías utilizadas",
                text: `
  <ul>
    <li><strong>Backend:</strong> Node.js + Express</li>
    <li><strong>Lenguaje:</strong> TypeScript</li>
    <li><strong>Base de datos:</strong> MongoDB</li>
    <li><strong>Mensajería:</strong> Firebase Cloud Messaging</li>
    <li><strong>Autenticación:</strong> OAuth</li>
  </ul>`
            },
            {
                title: "Más información",
                text: `<p>
    El corazón del sistema está desarrollado con Node.js y Express, lo que garantiza una base sólida y liviana para el manejo de peticiones. Toda la lógica está escrita en TypeScript, lo que permite mantener un código robusto y tipado desde el backend. Los datos se almacenan en MongoDB, ideal para manejar estructuras flexibles y escalar según la carga. Firebase Cloud Messaging se encarga del transporte seguro de cada mensaje hasta el dispositivo final, mientras que OAuth protege las rutas y asegura que cada acceso sea válido y autorizado.
  </p>`
            }
            ]
        }
    },

    {
        id: "reservas-trasporte",
        title: "Sistema de reservas de pasajes",
        color: "#eb9865",
        type: "Aplicacion",
        cover_image: miniatura_fono,
        date: new Date("2022-11-02"),
        difficult: "high",
        images: [
            fono1,
            fono2,
            fono3,
            fono4,
            fono5
        ],
        tags: [],
        content: {
            opening: `El transporte inteligente necesita soluciones digitales a la altura. Por eso desarrollamos una aplicación móvil pensada para optimizar la experiencia tanto de pasajeros como de choferes, integrando reservas, pagos, escaneo de QR y visualización de vehículos en tiempo real. Todo en un solo lugar.
      Con una interfaz moderna, intuitiva y adaptada a diferentes perfiles, esta app ofrece funcionalidades potentes para facilitar la organización de viajes, mejorar la eficiencia de los servicios y brindar al usuario el control total de su experiencia, ya sea como cliente o como chofer.`,
            customers_problem: `El cliente buscaba una solución móvil integral que permitiera gestionar el proceso completo de un viaje de transporte: desde la reserva de pasajes hasta la validación del pasajero en el vehículo, pasando por la carga de saldo, el control de servicios, y la visualización de estadísticas.
      Uno de los principales desafíos era crear un sistema que pudiera ofrecer una experiencia diferenciada para cada tipo de usuario, sin sacrificar fluidez ni facilidad de uso. Además, se requería que el sistema pudiera operar parcialmente sin conexión, y que la lectura de códigos QR fuera rápida, segura y precisa.
      También se priorizó que los choferes pudieran autogestionar sus servicios sin depender de un sistema externo, y que los pasajeros tuvieran acceso rápido a sus reservas, con una interfaz clara y una experiencia sin fricciones.`,
            solution: `Para resolver este desafío, desarrollamos una aplicación móvil utilizando React Native con TypeScript, centrada en ofrecer una experiencia fluida y adaptada para dos tipos de usuario: Cliente y Chofer.
      Desde el lado del cliente, la app permite organizar de forma simple y eficiente la compra de tickets, la gestión de pasajes y reservas. El usuario puede visualizar los vehículos cercanos en tiempo real sobre el mapa, reservar viajes, programarlos con anticipación y cargar crédito directamente desde la aplicación. También puede consultar su saldo disponible y controlar sus consumos, todo desde una interfaz moderna y ágil.
      Por otra parte, el rol de chofer fue pensado para facilitar la autogestión de servicios de transporte. Cada conductor puede dar de alta nuevos servicios, asignárselos, y acceder al detalle de los servicios próximos que tiene programados. Durante el recorrido, el chofer puede subir pasajeros escaneando el código QR que genera automáticamente la app para cada reserva, y finalizar el servicio una vez completado. Además, tiene acceso a estadísticas sobre su actividad, lo que le permite hacer un seguimiento de su rendimiento y organización.
      Para asegurar una experiencia robusta, se integró el uso de react-native-vision-camera y vision-camera-code-scanner para un escaneo de QR rápido y preciso, react-native-maps para geolocalización en tiempo real, y AsyncStorage para manejar la persistencia local de datos y mantener funcionalidades clave disponibles incluso sin conexión. El resultado es una solución completa, pensada para optimizar el tiempo, mejorar la comunicación entre pasajeros y choferes, y digitalizar de forma eficiente todo el proceso de gestión de viajes.`,
            technical_information: [
                {
                    title: "Tecnologías utilizadas",
                    text: `<ul>
    <li><strong>Framework:</strong> React Native CLI</li>
    <li><strong>Lenguaje:</strong> TypeScript</li>
    <li><strong>Escaneo de QR:</strong> react-native-vision-camera + vision-camera-code-scanner</li>
    <li><strong>Mapas y geolocalización:</strong> react-native-maps</li>
    <li><strong>Persistencia local:</strong> AsyncStorage</li>
    <li><strong>Plataforma:</strong> Aplicación móvil (Android e iOS)</li>
  </ul>`
                }
            ],
            html: `<section id="roles">
  <h2 style="font-size: 20px; margin-bottom: 12px"><strong>Funcionalidades por rol</strong></h2>

  <h3><b>Desde el rol de Cliente, el usuario puede:</b></h3>
  <ul>
    <li>-Comprar tickets, ver y administrar sus pasajes.</li>
    <li>-Visualizar vehículos cercanos en tiempo real en el mapa.</li>
    <li>-Reservar y programar viajes según su conveniencia.</li>
    <li>-Cargar crédito en su cuenta y gestionar sus saldos desde la app.</li>
  </ul>
  <br/>
  <h3><b>En cambio, si el usuario se identifica como Chofer, puede:</b></h3>
  <ul>
    <li>-Dar de alta nuevos servicios y asignárselos fácilmente.</li>
    <li>-Escanear códigos QR generados por la app para registrar pasajeros a bordo.</li>
    <li>-Finalizar servicios una vez completados.</li>
    <li>-Consultar información detallada de los próximos viajes y visualizar estadísticas de rendimiento.</li>
  </ul>
</section>`
        }
    },
    {
        id: "facturador-arca",
        title: "Automatizando la facturación electrónica: un caso de éxito con ARCA",
        color: "blue",
        cover_image: miniatura_fono,
        date: new Date("2025-09-01"),
        difficult: "high",
        images: [],
        tags: [],
        type: "web",
        video: "https://www.youtube.com/embed/WpR88OUU3MI",
        content: {
            opening: `La facturación electrónica se ha convertido en una parte esencial del día a día de cualquier empresa. Sin embargo, no siempre los sistemas oficiales ofrecen la mejor experiencia para los usuarios. En Argentina, muchos negocios dependen del portal de ARCA (ex AFIP) para emitir facturas, pero el proceso suele ser tedioso: múltiples formularios, datos repetidos y una interfaz poco optimizada para quienes facturan con frecuencia.
Este fue justamente el desafío que trajo uno de mis clientes: un sistema más ágil, moderno y centralizado para gestionar toda su facturación electrónica. A continuación, te cuento cómo abordamos el problema y cuál fue la solución final que desarrollamos.
            `,
            customers_problem: `El cliente tenía una problemática clara:

Pérdida de tiempo al tener que ingresar al portal de ARCA para cada factura.

Datos repetitivos: en cada operación debía volver a cargar manualmente la información de sus clientes, incluso para los más frecuentes.

Gestión complicada de múltiples puntos de venta: cada sucursal requería un manejo separado, lo que aumentaba la complejidad.

Ausencia de un CRM: no existía una base centralizada de clientes que facilitara el acceso a su información o el historial de facturación.

En resumen, el cliente buscaba una plataforma que le permitiera facturar con rapidez, minimizar los errores de carga manual y contar con una gestión más inteligente de sus clientes.`,
            solution: `La propuesta fue clara: crear un sistema de facturación electrónica propio, totalmente integrado con ARCA, pero con una interfaz moderna y fácil de usar.

Las principales funcionalidades que implementamos fueron:

Facturación directa desde la plataforma: ya no es necesario entrar al portal de ARCA, el sistema se conecta automáticamente para autorizar los comprobantes.

Plantillas de factura personalizables: cada punto de venta puede definir su logo, nombre de fantasía, dirección, teléfono y pie de página (footer en HTML).

CRM integrado: ahora toda la información de los clientes se guarda en un módulo dedicado, permitiendo búsquedas rápidas y precarga automática al emitir una factura.

Gestión multi–punto de venta: la solución soporta múltiples sucursales, cada una con su propia configuración de facturación.

Experiencia de usuario fluida: se optimizó el buscador de clientes, se evitaron bloqueos al escribir, y se agregaron opciones de filtrado inteligente.

En definitiva, el sistema resuelve los principales dolores de cabeza del cliente, ofreciendo ahorro de tiempo, reducción de errores y una experiencia mucho más eficiente.`,
            technical_information: [{
                title: "string",
                text: ""
            }]
        }

    }
]