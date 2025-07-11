'use client'

import React, { Suspense } from 'react'
import { fetchCatalogByTop } from '../api/animes/anime-catalog-top'
import CatalogList from '../components/catalog/catalog-list'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import CatalogSkeleton from '../components/catalog/catalog-skeleton'
import { fetchAnimeSearchFilter } from '../api/animes/anime-search-filter'

export default function CatalogPage() {
  const params = useSearchParams()
  const getPage = params.get('page') ?? ''
  const pageNumber = parseInt(getPage, 10) 
  const pathname = usePathname()
  const hasSearchParams = params.toString().length > 0

  

  const {data: searchFilter, isLoading: isSearchLoading} = useQuery({
    queryKey: ['search', params.toString()],
    queryFn: () => fetchAnimeSearchFilter(params),
    enabled: hasSearchParams,
    staleTime: 24 * 60 * 60 * 1000, // 24 horas (baseado no cache da API)
    gcTime: 24 * 60 * 60 * 1000, // 24 horas (mantém em cache por 24h)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })  

  if(isSearchLoading) return <CatalogSkeleton/>


  return (
    <div className="w-[80%] mx-auto h-full flex flex-col items-center my-10 ">
      <CatalogList catalog={searchFilter}/>
    </div>
  )
}

