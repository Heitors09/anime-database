'use client'

import { fetchSeasonalAnimes } from "@/app/api/mangas/anime-list"
import { useQuery } from "@tanstack/react-query"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SeaseonCarousel = () => {
const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 10,
    },
  })
const{data, isLoading} = useQuery({
  queryKey: ['seasonal-anime'],
  queryFn: fetchSeasonalAnimes,
  
})

if (isLoading) return <h1>Loading...</h1>



  return (
    <div className=" text-white h-[430px] mt-10 bg-carousel rounded-md w-[1289px] 2xl:w-full relative">
       <div className="py-5 px-12">
         <h2 className="text-2xl">Current season</h2>
         <p className="text-white text-sm">watch the anime from the current 2024 season now</p>
       </div>
    <div className="mx-12">
     <div ref={ref} className="keen-slider h-72">
          {data?.map(anime => (
            <div key={anime.mal_id} className="keen-slider__slide rounded-md ">
               <Image
                 src={anime.images.jpg.large_image_url}
                 alt="anime-cover"
                 fill
                 />
            </div>
          ))}
       </div>
       {instanceRef.current &&
          <div>
            <Button className="absolute top-1/2 -left-5" onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} >
              <ChevronLeft size={52} className="opacity-70"/>
            </Button>
            <Button className="absolute top-1/2 -right-5 " onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} >
              <ChevronRight size={52} className="opacity-70"/>
            </Button>
          </div>  
          }
    </div>  
    </div>
  )
}

export default SeaseonCarousel