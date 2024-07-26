import { SeasonTypes } from "@/types/anime-season-types"


export const fetchSeasonalAnimes = async () => {
    const response = await fetch('https://api.jikan.moe/v4/seasons/now')
    const data = await response.json() 
    const seasonalResponse = data.data as SeasonTypes
    

    
   return seasonalResponse
}

