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
      perView: 8,
      spacing: 20,
    },
  })

  const { data, isLoading } = useQuery({
    queryKey: ['seasonal-anime'],
    queryFn: fetchSeasonalAnimes,
    staleTime: 24 * 60 * 60 * 1000, // 24 horas (baseado no cache da API)
    gcTime: 24 * 60 * 60 * 1000, // 24 horas (mantém em cache por 24h)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })

  if (isLoading) return <CarouselSkeleton />

  return (
    <div className="text-white px-16 pb-16 w-[90%] 2xl:w-full">
      <div className="mt-4 relative flex flex-col items-center text-4xl gap-4">
        <h2 className="text-2xl font-bold">Seasonal anime</h2>
        <div ref={ref} className="keen-slider cursor-grab h-64 w-full">
          {data?.map((anime, index) => (
            <div 
              key={`${anime.mal_id}-${index}`} 
              className="keen-slider__slide rounded-md group cursor-pointer hover:brightness-75" 
              onClick={() => route.push(`/${anime.mal_id}`)}
            >
              <Image
                src={anime.images.jpg.large_image_url}
                alt={`${anime.title} cover`}
                fill
                className="object-cover rounded-md"
              /> 
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center mt-2">Drag to see more animes</p>
      </div>  
    </div>
  )
}

export default SeasonCarousel