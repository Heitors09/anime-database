'use client'


import { useSearchParams } from "next/navigation"
import CatalogNavbar from "../components/catalog/catalog-navbar"

import CatalogFilter from "../components/catalog/catalog-filter"
import { Suspense } from "react"
import CatalogSkeleton from "../components/catalog/catalog-skeleton"






export default function CatalogLayout({children}: {children: React.ReactNode}) {
  const params = useSearchParams()
  const getPage = params.get('page') ?? ''
  const pageNumber = parseInt(getPage, 10) 

  
  return (
    <div>
      <CatalogFilter/>
      
         {children}
      <CatalogNavbar params={params} pageNumber={pageNumber}/>
    </div>
  )
}