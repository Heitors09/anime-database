

export const fetchAnimeByName= async (searchText: string) => {
    const response = await fetch(`https://api.jikan.moe/v4/${searchText}`)
    const data = await response.json()
    

    
   return data
}

