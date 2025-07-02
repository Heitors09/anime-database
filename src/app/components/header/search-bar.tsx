'use client'
import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useQuery } from '@tanstack/react-query'
import { fetchAnimeByName } from '@/app/api/animes/anime-name'
import { fetchAnimeSearchFilter } from '@/app/api/animes/anime-search-filter'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SearchTypeSkeleton from './search-type-skeleton'


type SearchBarTypes = {
  className? : string
  placeholder? : string
}


const SearchBar = ({className, placeholder}: SearchBarTypes) => {
  const[searchText, setSearchText] = useState('')
  const[debouncedSearchText, setDebouncedSearchText] = useState('')
  const searchParams = useSearchParams()

  // Debounce para evitar requisições muito frequentes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 300) // Espera 300ms após parar de digitar

    return () => clearTimeout(timer)
  }, [searchText])

  // Cria novos parâmetros a cada mudança do searchText
  const createSearchParams = () => {
    const newParams = new URLSearchParams(searchParams.toString())
    if (debouncedSearchText.trim()) {
      newParams.set('q', debouncedSearchText.trim())
    } else {
      newParams.delete('q')
    }
    return newParams
  }

  const { data: searchFilter, isLoading: isSearchLoading } = useQuery({
    queryKey: ['search', debouncedSearchText],
    queryFn: () => fetchAnimeSearchFilter(createSearchParams()),
    enabled: debouncedSearchText.length > 0,
    staleTime: 24 * 60 * 60 * 1000, // 24 horas
    gcTime: 24 * 60 * 60 * 1000, // 24 horas
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })





  return (

  <label className={cn(
  "w-[400px] h-[44px] rounded-md bg-[#3d3e40] opacity-70 hover:cursor-pointer hover:brightness-110 duration-150", 
  className
)}>
    <Dialog>
       <DialogTrigger className="flex items-center gap-3 py-2.5 px-4">
         <Search className="text-white" size={20}/>
         <p className="text-white">{placeholder}</p>
      </DialogTrigger>
      <DialogContent  className="w-[758px] h-[552px] bg-[#3d3e40] rounded-md pt-0">
        <label className=" w-full h-12 flex items-center px-4 gap-3 border-b border-zinc-300 rounded-t-md">
         <Search className="text-white" size={20}/>
         <input className=" bg-transparent text-white w-[85%] h-12  outline-none" placeholder="Search" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
         />
        </label>
        <div className="flex flex-col p-5 pt-0 overflow-y-auto gap-2">
           <div className='flex items-center justify-center gap-2'>
            {
              searchText.length === 0 && (
                <h2 className='text-white text-sm font-bold animate-pulse'>Type to search</h2>)
            }
           </div>
          {isSearchLoading ? (
            <SearchTypeSkeleton/>
          ) : searchFilter?.data && searchFilter.data.length > 0 ? (
            searchFilter.data.map((anime: any) => (
              <Link href={`/${anime.mal_id}`} className='text-white flex items-center gap-3 p-3 rounded-[8px] bg-carousel' key={anime.mal_id}>
                <Image src={anime.images.jpg.image_url} alt={anime.title} width={100} height={100} className='rounded-md'/>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-sm font-bold'>{anime.title}</h1>
                  <h2 className='text-sm text-zinc-400'>{anime.type}</h2>
                  <p className='text-xs text-zinc-400 line-clamp-4'>{anime.synopsis}</p>
                </div>
              </Link>
            ))
          ) : searchText.length > 0 ? (
            <div className="text-white text-center py-8">No anime found</div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  </label>  
  )
}

export default SearchBar
