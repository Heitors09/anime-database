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
    <div className='flex  items-center gap-3 bg-[#3d3e40] rounded-[10px] m-5 shadow-md px-5 text-xs z-20 fixed bottom-0' >
        {!(pageNumber === 1) && (<Button className='  p-0 text-white transition-all ease-in-out duration-300' onClick={handlePrevPageChange}><ChevronLeft className='size-5 transition-all ease-in-out duration-300'/></Button>)}
        <div className='flex font-bold gap-3 text-white'>
          {pageNumberArray.map((page,index) => (
          <div key={index}>
            {pageNumber === Number(page) ? (
              <button className='bg-zinc-800 shadow-md p-2 size-8 flex justify-center rounded-full transition-all ease-in-out duration-300'>
                {page}
              </button>
            ) : (
              <button 
                onClick={() => handleNumberClick(Number(page))} 
                className='transition-all ease-in-out duration-300 p-2 size-8 flex justify-center rounded-full'
              >
                {page}
              </button>
            )}
          </div>
        ))}
        </div>
        {pageNumber < 8 && (<p className='text-white'>...</p>)}
        <Button className=' p-0 text-white ' onClick={handleNextPageChange}><ChevronRight className='size-4'/></Button>
      </div>
  )
}

export default CatalogNavbar
