import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const PopularSkeleton = () => {
  return (
    <div className='bg-[#121212] w-full h-[600px] flex justify-center items-center'>
      <ClipLoader
      color='white'
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"/>
    </div>
  )
}

export default PopularSkeleton
