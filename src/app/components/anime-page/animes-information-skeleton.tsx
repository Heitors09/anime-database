import React from 'react'

const AnimesInformationSkeleton = () => {
  return (
    <div className='flex gap-5 mt-[20px] h-[430px] w-[1300px]'>
     <div className='w-[23%] h-full rounded-md bg-carousel animate-pulse'></div>
     <div className='w-[75%] h-full rounded-md bg-carousel animate-pulse'></div>
    </div>
  )
}

export default AnimesInformationSkeleton
