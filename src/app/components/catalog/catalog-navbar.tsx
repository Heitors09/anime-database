'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'


type CatalogNavbarTypes = {
  pageNumber: number
  params: URLSearchParams;
}

const CatalogNavbar = ({pageNumber, params}:CatalogNavbarTypes) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleNextPageChange = () => {
    router.push(pathname + '?' + createQueryString('page', pageNumber + 1))
 }

 const handlePrevPageChange = () => {
   router.push(pathname + '?' + createQueryString('page', pageNumber - 1))
}

const createPageNumberArray = (pageNumber:number) => {
 if (pageNumber > 7) {
   return [1, '...', ...Array.from({ length: 6 }, (_, i) => pageNumber - 5 + i)]
 }
 return [1, 2, 3, 4, 5, 6, 7]
}



const pageNumberArray = createPageNumberArray(pageNumber)
 
 
 const createQueryString = useCallback(
   (name: string, value: number) => {
     const pageValue = value.toString()
     const searchParams = new URLSearchParams(params.toString())
     searchParams.set(name, pageValue)

     return searchParams.toString()
   },
   [params],
 )

const handleNumberClick = (page: number) => {
 router.push(pathname + '?' + createQueryString('page', page ))
}


  return (
    <div className='flex items-center justify-center gap-2 bg-zinc-900/95 backdrop-blur-sm rounded-full m-4 shadow-lg px-4 py-2 text-sm z-20 fixed bottom-0 left-1/2 -translate-x-1/2 border border-zinc-800'>
        {!(pageNumber === 1) && (
          <Button 
            variant="ghost" 
            size="icon"
            className='hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-200' 
            onClick={handlePrevPageChange}
          >
            <ChevronLeft className='size-4'/>
          </Button>
        )}
        <div className='flex font-medium gap-1 text-zinc-400'>
          {pageNumberArray.map((page,index) => (
            <div key={index}>
              {pageNumber === Number(page) ? (
                <button className='bg-zinc-800 text-white shadow-sm p-1.5 size-7 flex justify-center rounded-full transition-all duration-200'>
                  {page}
                </button>
              ) : (
                <button 
                  onClick={() => handleNumberClick(Number(page))} 
                  className='hover:bg-zinc-800 hover:text-white transition-all duration-200 p-1.5 size-7 flex justify-center rounded-full'
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>
        {pageNumber < 8 && (<p className='text-zinc-400'>...</p>)}
        <Button 
          variant="ghost" 
          size="icon"
          className='hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-200' 
          onClick={handleNextPageChange}
        >
          <ChevronRight className='size-4'/>
        </Button>
    </div>
  )
}

export default CatalogNavbar
