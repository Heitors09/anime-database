'use client'

import { fetchSeasonalAnimes } from "@/app/api/mangas/anime-list"
import { useQuery } from "@tanstack/react-query"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Info, PlayIcon, Plus, Star } from "lucide-react"
import CarouselSkeleton from "../top-carousel/carousel-skeleton"

const SeaseonCarousel = () => {
const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 10,
    },
  })
const{data, isLoading} = useQuery({
  queryKey: ['seasonal-anime'],
  queryFn: fetchSeasonalAnimes,
  
})

if (isLoading) return <CarouselSkeleton/>



  return (
    <div className=" text-white h-[430px] mt-10 bg-carousel rounded-md w-[1300px] 2xl:w-full relative">
       <div className="py-5 px-12">
         <h2 className="text-2xl">Current season</h2>
         <p className="text-white text-sm">watch the anime from the current 2024 season now</p>
       </div>
    <div className="mx-12">
     <div ref={ref} className="keen-slider h-80">
          {data?.map(anime => (
            <div key={anime.mal_id} className="keen-slider__slide rounded-md group">
               <Image
                 src={anime.images.jpg.large_image_url}
                 alt="anime-cover"
                 fill
                 />

               <div className="group-hover:absolute flex flex-col justify-between group-hover:cursor-pointer text-sm p-2 duration-200 group-hover:bg-carousel-images w-full h-full">
                <div> 
                 <h2>{anime.title}</h2>
                 <footer className="text-[#a0a0a0] text-sm">{anime.episodes} episodes</footer>
                 <div className="flex items-center text-[#a0a0a0]">
                  <Star size={16}/>
                  <p>({anime.score})</p>
                 </div>
                 <p className=" line-clamp-5">{anime.synopsis}</p>
                </div> 
                 
                 <div className="flex text-[#e45cba] gap-2">
                   <PlayIcon/>
                   <Info/>
                   <Plus/>
                 </div>
               </div>  
            </div>
          ))}
       </div>
          <div>
            <Button className="absolute top-1/2 -left-5" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} >
              <ChevronLeft size={52} className="opacity-70"/>
            </Button>
            <Button className="absolute top-1/2 -right-5 " onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} >
              <ChevronRight size={52} className="opacity-70"/>
            </Button>
          </div>  
    </div>  
    </div>
  )
}

export default SeaseonCarousel