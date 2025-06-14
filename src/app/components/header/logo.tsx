import Link from 'next/link'
import { Neucha } from 'next/font/google'
import Image from 'next/image'

const neucha = Neucha({subsets: ['latin'], weight: ['400']})


const Logo = () => {
  return (
    <Link href='/' className='flex items-center   gap-2 text-white text-4xl'>
     <p className={neucha.className}>AnimeHub
     </p>
    </Link>
  )
}

export default Logo
