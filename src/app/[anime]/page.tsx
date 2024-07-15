import Image from "next/image"
import { getAnimeById } from "../api/animes/anime-info"
import { Info, Play, PlayIcon, Plus, PlusIcon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type AnimePageProps = {
  params: {
    anime: number
  }
}



const AnimePage = async ({ params: {anime} }: AnimePageProps) => {
 const animeInfo = await getAnimeById(anime)
 console.log(animeInfo)


  return (
    <div className="w-full h-full flex mt-10 justify-center ">
      <div className="h-[430px] w-[1300px] bg-carousel rounded-md p-5 flex text-white gap-3">
        <Image
        src={animeInfo.data.images?.jpg.large_image_url}
        width={500}
        height={500}
        alt='lala '
        className="w-[23%] h-full rounded-md mt"
        />
       <div className="bg-anime-synopsis h-full rounded-md p-5">
       <h1 className="text-2xl font-extrabold">{animeInfo.data.title}</h1> 
       <p className="w-[600px] text-zinc-200 line-clamp-6 mt-1">{animeInfo.data.synopsis}</p>
       <div className=" text-sm mt-2 text-zinc-300 flex items-center gap-2">
           <Button className="ring-zinc-300 ring-1 gap-1 text-white">
             <PlusIcon/>
             Add to List
           </Button>
            <Button className="bg-white  gap-1 text-black">
              <Play size={18}/>Watch now 
            </Button> 
          <div className="flex items-center gap-1 ">
            <Star size={16}/>
             <p>{animeInfo.data.score}</p>
          </div> 
             <p>{animeInfo.data.episodes} episodes</p>
       </div>
      </div> 
      <div>
        <h2 className="font-bold text-lg">Trailer</h2>
        <iframe src={animeInfo.data.trailer.embed_url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md h-[200px]"
        />
      </div>
      </div>
    </div>
  )
}

export default AnimePage
