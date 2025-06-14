import Image from "next/image";
import SeasonCarousel from "./components/season-carousel/season-carousel";
import PopularBanner from "./components/popular-banner/popular-banner";
import Explore from "./components/explore/explore";


export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <PopularBanner/>
      <Explore/>
      <SeasonCarousel/>
    </div>
  )
}
