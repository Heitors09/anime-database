'use client'

import { TooltipProvider } from "@radix-ui/react-tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, Suspense } from "react"
import CatalogSkeleton from "../components/catalog/catalog-skeleton"


const AppWrapper = ({children}: {children: ReactNode}) => {
   const queryClient = new QueryClient()



  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<CatalogSkeleton/>}>
         {children}
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default AppWrapper
