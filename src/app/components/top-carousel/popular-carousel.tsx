'use client'
import { useQuery } from "@tanstack/react-query"
import { fetchPopularAnimes } from "../../api/animes/anime-list"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import CarouselSkeleton from "./carousel-skeleton"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"



const PopularCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const{data, isLoading, isError} = useQuery({
    queryKey: ['popular-anime'],
    queryFn: fetchPopularAnimes,
    staleTime: 3000
  })
   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider){
      setCurrentSlide(slider.track.details.rel)
    },
    created(){
      setLoaded(true)
    },
   })

   if(isLoading){
    return <CarouselSkeleton/>
   }   
   
   if(isError){
    return <h1>error...</h1>
   }
   
  

  return (
      <div className="navigation-wrapper  mt-[30px]">
         
      </div>
  )
}

export default PopularCarousel
