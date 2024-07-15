export async function getAnimeById(id: number){
   const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
   const response =  data.json()

   return response

}