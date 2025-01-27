import { DataCharacter } from "@/types/anime-characters-types"


export const getCharactersAnimeById = async (id: number) => {
  const data = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
  const response = await data.json() as DataCharacter

 

  return response
    
}