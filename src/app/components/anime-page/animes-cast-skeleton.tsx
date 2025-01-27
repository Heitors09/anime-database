import React from 'react'

const CastSkeleton = () => {
  return (
    <div className='flex gap-5 mt-[68px]'>
      {[...Array(10)]. map((_, index)=> (
           <div className='w-[108px] h-[160px] bg-carousel rounded-md' key={index}></div>
      ))}
    </div>
  )
}

export default CastSkeleton
