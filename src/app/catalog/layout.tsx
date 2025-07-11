'use client'


import { useSearchParams } from "next/navigation"
import CatalogNavbar from "../components/catalog/catalog-navbar"
import CatalogFilter from "../components/catalog/catalog-filter"


export default function CatalogLayout({children}: {children: React.ReactNode}) {
  const params = useSearchParams()
  const getPage = params.get('page') ?? ''
  const pageNumber = parseInt(getPage, 10) 

  return (
    <div>
      <CatalogFilter/>
      {children}
      {typeof window !== 'undefined' && (
        <CatalogNavbar params={params} pageNumber={pageNumber}/>
      )}
    </div>
  )
}