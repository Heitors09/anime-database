import React from 'react'

const CatalogSkeleton = () => {
  return (
    <div className='w-[80%] mx-auto h-full flex flex-col items-center my-10'>
      <div className='grid grid-cols-5 gap-4 pb-10'>
        {Array.from({ length: 25 }).map((_, index) => ( 
          <div key={index} className='relative w-52 h-72 rounded-md'>
            <div className='w-full h-full animate-pulse rounded-md bg-[#0a0a0a]' />
            <div className='absolute inset-0 flex flex-col gap-2 p-5'>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogSkeleton
