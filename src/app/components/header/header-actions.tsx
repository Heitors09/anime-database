import Link from "next/link"
import { headerItems } from "../../constants/data"



const HeaderActions = () => {
  return (
    <ul className="flex gap-8 ">
      {headerItems.map(({text,  href}) => (
         <li key={text} >
          <Link href={href} className="text-zinc-300  flex items-center gap-1   p-3  duration-200">
            {text}
            </Link>
         </li>
      ))}
    </ul>
  )
}

export default HeaderActions