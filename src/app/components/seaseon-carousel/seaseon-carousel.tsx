'use client'

import { fetchSeasonalAnimes } from "@/app/api/animes/anime-list"
import { useQuery } from "@tanstack/react-query"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Info, PlayIcon, Plus, Star } from "lucide-react"
import CarouselSkeleton from "../top-carousel/carousel-skeleton"
import { useRouter } from "next/navigation"

const SeaseonCarousel = () => {
const route = useRouter()
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
         <h2 className="text-2xl font-extrabold">Current season</h2>
         <p className="text-zinc-100 text-sm">watch the anime from the current 2024 season now</p>
       </div>
    <div className="mx-12">
     <div ref={ref} className="keen-slider h-80">
          {data?.map(anime => (
            <div key={anime.mal_id} className="keen-slider__slide rounded-md group" onClick={() => route.push(`/${anime.mal_id}`)}>
               <Image
                 src={anime.images.jpg.large_image_url}
                 alt="anime-cover"
                 fill
                 />

               <div className="group-hover:absolute flex flex-col justify-between group-hover:cursor-pointer text-sm p-3 duration-200 group-hover:bg-carousel-images w-full h-full">
                <div> 
                 <h2 className="text-base">{anime.title}</h2>
                 <p className=" line-clamp-5 mt-1 text-[12px] text-zinc-200 leading-[19px]">{anime.synopsis}</p>
                <div className="flex gap-2">
                 <div className="flex items-center mt-2 gap-1 text-zinc-400">
                  <Star size={16}/>
                  <p>({anime.score})</p>
                 </div>

                </div>
                </div> 
                <div className="flex items-center justify-between">
                 <div className="flex items-center text-[#e45cba] gap-2">
                   <PlayIcon/>
                   <Info/>
                   <Plus/>
                 </div>
                 <footer className="text-zinc-400 text-sm">{anime.episodes} episodes</footer>
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