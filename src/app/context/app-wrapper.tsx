'use client'

import { TooltipProvider } from "@radix-ui/react-tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, Suspense, useState } from "react"
import CatalogSkeleton from "../components/catalog/catalog-skeleton"


const AppWrapper = ({children}: {children: ReactNode}) => {
   const [queryClient] = useState(() => new QueryClient({
     defaultOptions: {
       queries: {
         staleTime: 24 * 60 * 60 * 1000, // 24 horas
         gcTime: 24 * 60 * 60 * 1000, // 24 horas
         refetchOnWindowFocus: false,
         refetchOnMount: false,
         retry: 3,
         retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
       },
     },
   }))

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
