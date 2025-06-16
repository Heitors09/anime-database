export const fetchAnimeSearchFilter = async (params: URLSearchParams) => {
  // Constrói a URL base
  let url = 'https://api.jikan.moe/v4/anime?'
  
  // Mapeia os parâmetros para o formato esperado pela API Jikan
  const genre = params.get('genre')
  const order = params.get('order')
  const page = params.get('page') || '1'

  // Adiciona os parâmetros na URL
  if (genre) {
    url += `genres=${genre}&`
  }
  if (order) {
    url += `order_by=${order}&`
  }
  url += `page=${page}&sfw=true`

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)

  return data
}