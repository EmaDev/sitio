import Link from 'next/link'
import React from 'react'

interface Props {
    link: string;
    title: string;
    icon?: any;
}
export const AnimatedButton = ({link, title, icon}:Props) => {
    return (
        <Link
            className="group relative z-50 flex items-center justify-center overflow-hidden text-wrap
              px-6 py-2 text-center text-md font-semibold text-white shadow-md transition 
             hover:scale-110 hover:shadow-xl sm:text-xl bg-[#006fee]"
            rel="noopener noreferrer"
            target="_blank"
            title="Contactar a Emanuel Cisterna"
            href={link}
            style={{clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)"}}
        >
            <div className="width-full absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent
             via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
            {title}
        </Link>
    )
}