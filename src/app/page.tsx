import Image from "next/image";
import SeasonCarousel from "./components/season-carousel/season-carousel";


export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <SeasonCarousel/>
    </div>
  )
}
