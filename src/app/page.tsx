import PopularCarousel from "./components/top-carousel/popular-carousel"
import SeaseonCarousel from "./components/seaseon-carousel/seaseon-carousel"


export default function Home() {
 
  return (
    <div className="flex flex-col items-center">
      <SeaseonCarousel/>
    </div>
  )
}
