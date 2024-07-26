'use client'

import { getCharactersAnimeById } from '@/app/api/animes/anime-characters'
import { useQuery } from '@tanstack/react-query'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CastSkeleton from './animes-cast-skeleton'



type animeCastProps = {
  animeId : number
}

const AnimeCast = ({animeId}: animeCastProps) => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 10,
      spacing: 20,
    },
  })
  const {data, isLoading} = useQuery({
    queryKey: ['anime-characters'],
    queryFn: () => getCharactersAnimeById(animeId),
  })

  if(isLoading){
    return <CastSkeleton/>
  }
   
  console.log(data)
  
  return (
  <div>

  <h2 className='m-5 text-white text-xl'>Characters & Info</h2>
  
    <div className='relative bg-carousel h-auto p-5  w-[1300px] rounded-md  mb-12 grid grid-cols-4 gap-6'>
      {data?.data.map(character => (
          <div key={character.character.mal_id} className='rounded-md p-5 flex gap-5 duration-200  text-white hover:cursor-pointer hover:bg-anime-synopsis'>
            <Image
            src={character.character.images.jpg.image_url}
            alt='character-cover'
            width={100}
            height={100}
            className='rounded-md'
            />
            <div className='flex flex-col justify-between'>
              <div>
              <p>{character.character.name}</p>
              <span className='text-sm text-zinc-300'>{character.role}</span>
               
              </div>  

              <p className='text-sm'>{character.favorites} Favorites</p>
            </div>  
          </div>  
         ))}
       
    </div>
  </div>     
  )
}

export default AnimeCast
