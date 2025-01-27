import 'keen-slider/keen-slider.min.css'


const CarouselSkeleton = () => {
  return (
    <div className='flex gap-5'>
    {Array.from({ length: 6 }).map((_, index) => ( 
      <div className='w-[186px] h-[256px] animate-pulse  rounded-md bg-[#0a0a0a]' key={index}></div>
    ))}
  </div>
  )
}

export default CarouselSkeleton 
