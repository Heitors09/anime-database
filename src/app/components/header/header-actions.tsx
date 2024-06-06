import Link from "next/link"
import { headerItems } from "../../constants/data"



const HeaderActions = () => {
  return (
    <ul className="flex gap-8 text-sm ">
      {headerItems.map(({text, icon: Icon, href}) => (
         <li key={text} >
          <Link href={href} className="text-white flex items-center border-b-2 border-[#e45cba] gap-1 text-white hover:bg-[#e45cba] p-3 rounded-full duration-200">
           <Icon width={20} height={20}/>
            {text}
            </Link>
         </li>
      ))}
    </ul>
  )
}

export default HeaderActions