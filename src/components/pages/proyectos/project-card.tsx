import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ProjectCardProps {
  id: string;
  cover: StaticImageData;
  title: string;
  date: Date;
}

export function ProjectCard({ id, cover, title, date }: ProjectCardProps) {
  const href = `/proyectos/${id}`;

  const renderDate = () => {
    const formatedDate = format(date, 'MMMM yyyy', { locale: es });
    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
  };

  return (
    <div className="group cursor-pointer border rounded-lg p-4 text-start bg-card">
      {/* Imagen clickeable */}
      <Link
        href={href}
        aria-label={`Ver proyecto ${title}`}
        className="block w-full h-48 md:h-64 rounded-md shadow-md hover:scale-105 duration-500 mb-4 overflow-hidden relative"
      >
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 100vw, 100vw"
        />
      </Link>

      <Link href={href}>
        <span
          className="bg-gradient-to-r 
                    bg-[length:0px_10px] bg-left-bottom bg-no-repeat 
                    transition-[background-size] duration-500 
                    hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
                    from-[#FD6585] to-[#0D25B9]/20 dark:to-[#0D25B9]"
        >
          {title}
        </span>
      </Link>

      <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
        <span className="truncate text-sm">Emanuel Cisterna</span>
        <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
        <time className="truncate text-sm" dateTime={date.toISOString()}>
          {renderDate()}
        </time>
      </div>
    </div>
  );
}
