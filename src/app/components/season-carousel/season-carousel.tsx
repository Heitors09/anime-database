'use client'

import { fetchSeasonalAnimes } from "@/app/api/animes/anime-list"
import { useQuery } from "@tanstack/react-query"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CarouselSkeleton from "./carousel-skeleton"
import { useRouter } from "next/navigation"
import { Neucha } from 'next/font/google'
import { ChevronLeft, ChevronRight } from "lucide-react"

const neucha = Neucha({subsets: ['latin'], weight: ['400']})

const SeasonCarousel = () => {
const route = useRouter()
const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 20,
    },
  })
const{data, isLoading} = useQuery({
  queryKey: ['seasonal-anime'],
  queryFn: fetchSeasonalAnimes,
  
})

if (isLoading) return <CarouselSkeleton/>




  return (
    <div className=" text-white   w-[90%] 2xl:w-full">
     
    <div className="mt-4 relative flex flex-col text-3xl gap-4">
      <h2 className={neucha.className}>Seasonal anime</h2>
    <div ref={ref} className="keen-slider h-64 w-10 ">
          {data?.map(anime => (
            <div key={anime.mal_id} className="keen-slider__slide rounded-md group cursor-pointer  hover:brightness-75" onClick={() => route.push(`/${anime.mal_id}`)}>
               <Image
                 src={anime.images.jpg.large_image_url}
                 alt="anime-cover"
                 fill
                 /> 
            </div>
          ))}
       </div>
       <div className="flex cursor-pointer">
         
         <ChevronLeft className="absolute -left-14 top-36 hover:bg-muted  opacity-75 p-1" size={44}  onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }/>
         <ChevronRight className="absolute -right-14 top-36 hover:bg-muted  opacity-75 p-1" size={44} onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }/>
       </div>

    </div>  
    </div>
  )
}

export default SeasonCarousel