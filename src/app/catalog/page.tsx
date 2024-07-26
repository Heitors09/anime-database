import React from 'react'
import { fetchCatalogByTop } from '../api/animes/anime-catalog-top'
import CatalogList from '../components/catalog/catalog-list'

const Catalog = async () => {
  const catalog = await fetchCatalogByTop()

  return (
    <div className=" w-[80%] mx-auto h-screen  my-10 ">
      <CatalogList catalog={catalog}/>
    </div>
  )
}

export default Catalog
