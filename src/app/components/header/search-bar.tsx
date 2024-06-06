import { Search } from "lucide-react"

const SearchBar = () => {
  return (

  <label className="w-[270px] h-[34px] rounded-full bg-[#e45cba] px-4 flex items-center gap-5 ">
    <input className=" bg-[#e45cba] text-white outline-none "/>
    <Search className="text-white" size={20}/>
  </label>  
      
    
  )
}

export default SearchBar
