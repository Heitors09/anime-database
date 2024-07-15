import { Search } from "lucide-react"

const SearchBar = () => {
  return (

  <label className="w-[400px] h-[44px] rounded-md bg-[#3d3e40] opacity-70 px-4 flex items-center gap-3 ">
    <Search className="text-white" size={20}/>
    <input className=" text-white outline-none bg-[#3d3e40] " placeholder="Search"/>
  </label>  
      
    
  )
}

export default SearchBar
