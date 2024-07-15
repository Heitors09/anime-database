import Buttons from "./buttons"
import HeaderActions from "./header-actions"
import Logo from "./logo"
import SearchBar from "./search-bar"

const Header = () => {
  return (
    <div className=" w-full  h-[80px] ring-zinc-300 ring-opacity-75 flex items-center justify-around ring-1 ">
      <Logo/>
      <HeaderActions/>
      <SearchBar/>
      <Buttons/>
    </div>
  )
}

export default Header
