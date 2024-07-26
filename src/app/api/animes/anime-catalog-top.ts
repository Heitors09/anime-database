import { Catalog } from "@/types/catalog-types"


export const fetchCatalogByTop = async () => {
    const data = await fetch('https://api.jikan.moe/v4/top/anime') 
    const response = await data.json() as Catalog

    return response
}