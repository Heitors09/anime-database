'use client'

import { Button } from '@/components/ui/button'
import { useKeenSlider } from 'keen-slider/react'
import { Bookmark, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PopularSkeleton from './popular-skeleton'
import { popularBanner } from '@/app/constants/data'
import Image from 'next/image'

const PopularBanner = () => {





  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    dragSpeed: 0.5,
    slides: {
      perView: 1,
    },
  })

  
  


  return (
    <>
        <div ref={ref} className="keen-slider relative">
          {popularBanner?.map(popular => (
           <div key={popular.id} className="keen-slider__slide relative h-[800px]" >
           <Image
             src={popular.banner}
             alt="anime popular banner"
             fill
             className="object-cover object-top"
             priority
             unoptimized
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
           <div className="absolute z-10 top-48 left-[64px] bottom-0 flex items-start  w-full">
             <div className="text-white max-w-xl flex flex-col gap-6 ">
               <h1 className="text-6xl font-bold">{popular.name}</h1>
               <p className="text-lg text-clip line-clamp-6 ">{popular.description}</p>
               <div className='flex gap-2'>
                <Dialog>
                  <DialogTrigger>
                    <Button className="bg-white text-[#0a0a0a] font-bold  px-8 py-6  flex gap-1"><Play/>Watch Episodes</Button>
                  </DialogTrigger>
                  <DialogContent className='h-auto w-auto rounded-md bg-[#0a0a0a]'>
                  <DialogTitle className='text-white px-5'>Avaible on</DialogTitle>
                   <div className='flex flex-col  gap-1'>
                    
                     {popular.streaming.platforms.map((platforms, index: number) => (
                      <p className='text-white w-[200px]  h-10 rounded-md flex gap-1 group items-center px-7  hover:bg-[#242424] duration-200 cursor-pointer' key={index}>{platforms}<ChevronRight className='h-3 w-3 group-hover:ml-1 group-hover:duration-200'/></p>
                     ))}
                     
                    </div> 
                  </DialogContent>
                </Dialog>
                <Tooltip>
                  <TooltipTrigger>
                    <Button className='bg-[#242424] py-6 text-white'><Bookmark/></Button>
                  </TooltipTrigger>
                  <TooltipContent className='bg-[#242424] text-white'>
                    <p >Save in a list</p>
                  </TooltipContent>
                </Tooltip> 
               </div>
             </div>
             
           </div>

         </div>
          ))}
             <div className="flex cursor-pointer">
                 <ChevronLeft className="absolute left-2 top-64 hover:bg-muted text-white opacity-75 p-1" size={44}  onClick={(e: any) =>
                          e.stopPropagation() || instanceRef.current?.prev()
                           }/>
                     <ChevronRight className="absolute right-2 top-64 hover:bg-muted text-white opacity-75 p-1" size={44} onClick={(e: any) =>
                       e.stopPropagation() || instanceRef.current?.next()
                       }/>
             </div>
            
        </div>
        
    </>
  )
}

export default PopularBanner
