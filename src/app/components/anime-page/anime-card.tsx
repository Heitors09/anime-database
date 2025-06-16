'use client'

import { Button } from '@/components/ui/button'
import { Play, PlusIcon, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import { getAnimeById } from '@/app/api/animes/anime-info'
import SeasonCarousel from '../season-carousel/season-carousel'
import AnimesInformationSkeleton from './animes-information-skeleton'


type animeCardProps = {
  animeId : number
}


const AnimeCard = ({animeId} : animeCardProps) => {
  const {data, isLoading} = useQuery({
    queryKey: ['anime-info'],
    queryFn: () => getAnimeById(animeId),
  })




  if(isLoading){
    return <AnimesInformationSkeleton/>
  }
   



  return (
    <div className="h-[430px] w-[1300px] bg-carousel rounded-md p-5 flex text-white gap-3">
        <Image
        src={data?.data.images?.jpg.large_image_url || ''} 
        width={500}
        height={500}
        alt='anime-cover'
        className="w-[23%] h-full rounded-md"
        />
       <div className="relative bg-anime-synopsis h-full  rounded-md p-5">
       <h1 className="text-2xl font-extrabold">{data?.data.title}</h1> 
       <div className="overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[180px] pr-2">
         <p className="w-[600px] text-zinc-200  mt-4">{data?.data.synopsis}</p>

       </div>
       <div className=" text-sm mt-5 text-zinc-300 flex items-center gap-3 flx-wrap">
        
           <Button className="ring-zinc-300 ring-1 gap-1 text-white">
           <Sparkles size={18}/>
             What AI says about
           </Button>
            <Button className="bg-white  gap-1 text-black">
              <Play size={18}/>Watch now 
            </Button>
         <div className="flex gap-3">
          <div className="flex items-center gap-1 ">
            <Star size={16}/>
             <p>{data?.data.score}</p>
          </div> 
          <div className=" border border-zinc-300"/>
             <p>{data?.data.episodes} episodes</p>
          
          </div>  
         
      </div>   
      <div className="absolute flex right-5 bottom-5 gap-3  justify-end">
            {data?.data.genres.map(genre => (
              <p className="ring-1 ring-zinc-300 p-2 rounded-md text-sm" key={genre.mal_id}>{genre.name}</p>
            ))}
          </div>   
       </div>
      
      <div className="flex flex-col gap-3 ">
        <h2 className="font-bold text-lg">Trailer</h2>
        <iframe src={data?.data.trailer.embed_url}
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md h-[200px]"
        />
        <div className="h-[150px] rounded-md bg-anime-synopsis p-3">
          <h2 className="text-lg">Information</h2>
          <ul className="mt-2 flex flex-col gap-1">
            <li className="flex justify-between">Type <span>{data?.data.type}</span></li>
            <li className="flex justify-between">Status <span>{data?.data.status}</span></li>
            <li className="flex justify-between  ">Studios <span>{data?.data.studios[0].name}</span></li>
          </ul>
        </div>
      </div>
      </div>

  )
}

export default AnimeCard
