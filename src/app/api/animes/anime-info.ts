import { AnimeInfosDataType } from "@/types/anime-info-types"

export async function getAnimeById(id: number){
   const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
   const data = await  response.json() as AnimeInfosDataType

   return data

}