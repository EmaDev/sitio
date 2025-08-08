import Link from "next/link"

interface Props {
    text?: string;
    href: string;
}
export const ButtonLink = ({ text = "Saber más", href }: Props) => {
    return (
        <Link className="mt-4 relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 
                            pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none 
                            disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            href={href}>
            <span>{text} →</span>
        </Link >
    )
}
