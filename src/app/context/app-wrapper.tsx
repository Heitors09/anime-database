'use client'

import { TooltipProvider } from "@radix-ui/react-tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"


const AppWrapper = ({children}: {children: ReactNode}) => {
   const queryClient = new QueryClient()



  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default AppWrapper
