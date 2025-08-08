import Image, { StaticImageData } from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ProjectCardProps {
  id: string;
  cover: StaticImageData;
  title: string;
  date: Date;
}

export function ProjectCard({ id, cover, title, date }: ProjectCardProps) {

  const renderDate = () => {
    const formatedDate = format(date, "MMMM yyyy", { locale: es });

    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
  }

  return (
    <div className='group cursor-pointer border rounded-lg p-4 text-start bg-card'>
      <div className='w-full h-48 md:h-64 rounded-md shadow-md hover:scale-105 duration-500 mb-4 overflow-hidden'>
        <Image
          src={cover}
          alt="Nombre proyecto"
          className="h-full object-cover"
        />
      </div>
      <a
        href={"/proyectos/" + id}>
        <span className="bg-gradient-to-r from-green-200 to-green-100
                    bg-[length:0px_10px] bg-left-bottom bg-no-repeat 
                    transition-[background-size] duration-500 
                    hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
                    dark:from-purple-800 dark:to-purple-900">
          {title}
        </span>
      </a>
      <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
        {/*<a href="/author/erika-oliver"><div className="flex items-center gap-3">
                    <div className="relative h-5 w-5 shrink-0">
                        <img alt="Erika Oliver" loading="lazy" decoding="async"
                        data-nimg="fill" className="rounded-full object-cover"
                        style={{position:"absolute",height:"100%",width:"100%;",left:0,top:0,right:0,bottom:0,color:"transparent"}}
                        sizes="20px"
                        src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"/>
                    </div>
                    <span className="truncate text-sm">
                        Erika Oliver
                    </span>
                </div>
                </a>*/}
        <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
        <time className="truncate text-sm" dateTime="2022-09-21T15:14:00.000Z">
          {renderDate()}
        </time>
      </div>

    </div>
  );
}
