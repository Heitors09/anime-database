import { AnimeTypes } from "@/types/anime-types"




export const fetchPopularAnimes = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=6')  
    const data = await response.json()  as AnimeTypes 
    const animeResponse = data.data


   return animeResponse
}

export const fetchSeasonalAnimes = async () => {
    const response = await fetch('https://api.jikan.moe/v4/seasons/now')
    const data = await response.json() as AnimeTypes
    const seasonalResponse = data.data


    
   return seasonalResponse
}

