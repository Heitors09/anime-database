import React from 'react'

const CatalogSkeleton = () => {
  return (
    <div className=' h-screen  w-[80%] mx-auto my-10 grid grid-cols-5 gap-4 pb-10'>
      {Array.from({ length: 25 }).map((_, index) => ( 
      <div className='w-[208px] h-[288px] animate-pulse  rounded-md bg-[#0a0a0a]' key={index}></div>
    ))}
    </div>
  )
}

export default CatalogSkeleton
