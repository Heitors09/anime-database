

export async function getAnimeInfosById(id: number){
  console.log(id)
   const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
   const response =  data.json()

   return response

}