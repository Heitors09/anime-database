'use client'
import { useState } from 'react'
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


type SearchBarTypes = {
  className? : string
  placeholder? : string
}


const SearchBar = ({className, placeholder}: SearchBarTypes) => {
  const[searchText, setSearchText] = useState('')


  



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
      </DialogContent>
    </Dialog>
  </label>  
  )
}

export default SearchBar
