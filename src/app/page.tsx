import Image from "next/image";
import SeasonCarousel from "./components/season-carousel/season-carousel";
import PopularBanner from "./components/popular-banner/popular-banner";


export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <PopularBanner/>
      <SeasonCarousel/>
    </div>
  )
}
