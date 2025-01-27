import { Catalog } from "@/types/catalog-types"


export const fetchCatalogByTop = async (page: number) => {
    const data = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`) 
    const response = await data.json() as Catalog
    return response
}