import HeaderActions from "./header-actions"
import Logo from "./logo"
import SearchBar from "./search-bar"

const Header = () => {
  return (
    
    <div className=" w-full h-[70px] bg-carousel px-20 justify-around flex items-center gap-12">
      <Logo/>
      <HeaderActions/>
      <SearchBar/>
    </div>
  )
}

export default Header
