interface Props {
    className?:string;
}
export const Divider = ({className = "w-full"}:Props) => {
    return (
        <div className={`bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] ${className}`} >
        </div>
    )
}
