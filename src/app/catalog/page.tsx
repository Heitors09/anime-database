'use client'


import React, { useCallback } from 'react'
import { fetchCatalogByTop } from '../api/animes/anime-catalog-top'
import CatalogList from '../components/catalog/catalog-list'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import CatalogSkeleton from '../components/catalog/catalog-skeleton'
import CatalogNavbar from '../components/catalog/catalog-navbar'

const Catalog = () => {
  const params = useSearchParams()
  const getPage = params.get('page') ?? ''
  const pageNumber = parseInt(getPage, 10) 
  const pathname = usePathname()
  const {data: catalog, isLoading} = useQuery({
    queryKey: [pageNumber],
    queryFn: () => fetchCatalogByTop(pageNumber)
  })  


 


 
if(isLoading) return <CatalogSkeleton/>

  return (
    <div className="w-[80%] mx-auto h-full flex flex-col items-center my-10 ">
      <CatalogList catalog={catalog}/>
      <CatalogNavbar params={params} pageNumber={pageNumber}/>
    </div>
  )
}

export default Catalog
