import Image from 'next/image';
import { Divider } from '@/components/ui/Divider';
import { AlbumsList } from './AlbumList';
import { ThemeToggle } from '@/components/theme-toggle';

export interface User {
    name: string;
    avatar: string;
    tags: string[];
    albums: string[];
}

interface Props {
    user: User
}

export default async function Header({ user }: Props) {

    return (
        <>
            <div className='flex justify-between items-center py-1'>
                <div className='w-full flex gap-4 items-center'>
                    <div
                        className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-400 overflow-hidden transition-all duration-200 hover:scale-105'
                    >
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            width={400} height={400}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='text-gray-900 dark:text-white'>
                        <h2 className='text-lg md:text-xl font-bold'>{user.name}</h2>
                        <p className='text-xs md:text-md ml-1'>
                            {
                                user.tags.map((tag, i) => (
                                    <span key={tag}>{`${tag} ${(user.tags.length - 1) === i ? "" : "| "}`}</span>
                                ))
                            }
                        </p>
                    </div>
                </div>
                <ThemeToggle />
            </div>
            <Divider className='my-4' />
            <AlbumsList
                albums={user.albums}
            />
        </>
    )
}
