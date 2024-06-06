import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-lg font-bold gap-2 '>
       <Image 
       src='/logo-anime.png'
       alt='logo image'
       width={42}
       height={42}
       />
     <p className="text-white">Anime Action</p>
    </Link>
  )
}

export default Logo
