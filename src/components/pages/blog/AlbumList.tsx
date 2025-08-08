"use client"

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button';

interface Props {
    albums: string[];
}

export const AlbumsList = ({ albums }: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const activeAlbum = searchParams.get('album');

    const handleNavigate = (album: string) => {
        if (album === "Favoritos") {
            return router.push(`/blog`)
        }
        return router.push(`/blog?album=${album}`)
    }
    return (
        <div className='lex justify-center mb-8'>
            <div className="flex flex-wrap gap-2">
            <Button
                variant={!activeAlbum ? 'default' : 'secondary'}
                onClick={() => handleNavigate("Favoritos")}
                className="rounded-full px-4"
            >{"Favoritos"}</Button>
            {
                albums.map((album, i) => (
                    <Button
                        key={album}
                        variant={activeAlbum === album ? 'default' : 'secondary'}
                        onClick={() => handleNavigate(album)}
                        className="rounded-full px-4"
                    >
                        {album.charAt(0).toUpperCase() + album.slice(1)}
                    </Button>
                ))
            }
            </div>
        </div>
    )
}
