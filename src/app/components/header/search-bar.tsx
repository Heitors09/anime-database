import { cn } from "@/lib/utils"
import { Search } from "lucide-react"


type SearchBarTypes = {
  className? : string
  placeholder? : string
}


const SearchBar = ({className, placeholder}: SearchBarTypes) => {
  return (

  <label className={cn(
  "w-[400px] h-[44px] rounded-md bg-[#3d3e40] opacity-70 px-4 flex items-center gap-3 ", 
  className
  )}>
    <Search className="text-white" size={20}/>
    <input className=" text-white outline-none w-full bg-[#3d3e40] " placeholder={placeholder}/>
  </label>  
      
    
  )
}

export default SearchBar
