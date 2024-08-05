'use client'

import { fetchCatalogByTop } from '@/app/api/animes/anime-catalog-top'
import { Button } from '@/components/ui/button'
import { Catalog } from '@/types/catalog-types'
import { useQuery } from '@tanstack/react-query'
import { Bookmark, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'

type CatalogListTypes = {
  catalog : Catalog | undefined
}

const CatalogList = ({catalog}: CatalogListTypes) => {
 
  const router = useRouter()
  
  const handleRouterPush = (id: number) => {
    router.push(`/${id}`)
  }
 
 


  return (
    <div className='grid grid-cols-5 gap-4 pb-10'>
      {catalog?.data.map(anime => (
        <div key={anime.mal_id} className='relative  w-52 h-72 rounded-md cursor-pointer' onClick={ () => handleRouterPush(anime.mal_id)}>
          <Image
          src={anime.images.jpg.large_image_url}
          layout='fill'
          objectFit='cover'
          alt='anime-image'
          className='rounded-md'
          />
          <div className='absolute flex flex-col gap-2 p-5 z-10 bg-transparent group hover:bg-carousel-images duration-200 w-full h-[100%] rounded-md'>
              <h2 className='group-hover:text-white text-transparent font-bold line-clamp-3'>{anime.title}</h2>
             <div className='flex gap-1'>
                <div className='flex items-center gap-1 text-sm font-medium'>
                   <Star className='group-hover:text-white text-transparent w-4 h-4'/>
                   <p className='group-hover:text-white text-transparent '>{anime.score}</p>
                 </div> 
              </div> 
              <p className='group-hover:text-white text-transparent line-clamp-6 text-xs font-medium'>{anime.synopsis}</p>
              <div className='flex group-hover:text-white text-transparent line-clamp-6 text-xs font-medium'>
                  <Bookmark/>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogList
