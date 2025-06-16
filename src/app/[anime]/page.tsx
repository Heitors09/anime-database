import Image from "next/image"
import { getAnimeById } from "../api/animes/anime-info"
import { Info, Play, PlayIcon, Plus, PlusIcon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import '@/styles/index.css'
import { getCharactersAnimeById } from "../api/animes/anime-characters"
import AnimeCard from "../components/anime-page/anime-card"
import AnimeCast from "../components/anime-page/anime-cast"
import AnimesInformationSkeleton from "../components/anime-page/animes-information-skeleton"

type AnimePageProps = {
  params: {
    anime: number
  }
}




const AnimePage = async ({ params: {anime} }: AnimePageProps) => {


  return (
    <div className="w-full h-full items-center flex flex-col justify-center ">
      <AnimeCard animeId={anime}/>
      <AnimeCast animeId={anime}/>
    </div>
  )
}

export default AnimePage
