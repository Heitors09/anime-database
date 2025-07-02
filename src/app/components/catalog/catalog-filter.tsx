import { animeGenres, orderByOptions } from "@/app/constants/data";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function CatalogFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleFilterSelect = (filterName: string, filterValue: string) => {
    const currentParams = new URLSearchParams(searchParams.toString())
    currentParams.set(filterName, filterValue)
    
    // Mantém a página atual se existir
    if (!currentParams.has('page')) {
      currentParams.set('page', '1')
    }
    
    router.push(pathname + '?' + currentParams.toString())
  }

  return (
    <section className=" w-full gap-4 h-auto my-12 flex items-center mx-[372px]">
      <Menubar className="bg-zinc-900/95 w-[300px] backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 rounded-[8px] shadow-lg">
        <MenubarMenu>
          <MenubarTrigger className="text-zinc-400 w-full hover:text-white data-[state=open]:bg-zinc-800 data-[state=open]:text-white transition-all duration-200 justify-between">
            {animeGenres.find(genre => genre.mal_id.toString() === searchParams.get('genre'))?.name || 'Genres'} {!searchParams.get('genre') ? (<ChevronDownIcon size={16}/>):(
              <button onClick={() => handleFilterSelect('genre', '')}>
                <XIcon size={16}/>
              </button>
            )}
          </MenubarTrigger>
          <MenubarContent className="bg-zinc-900/95 w-[300px] backdrop-blur-sm border border-zinc-800 rounded-lg shadow-lg">
            {animeGenres.map((genre) => (
              <MenubarItem 
                key={genre.mal_id}
                className="text-zinc-400 hover:cursor-pointer hover:text-white hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white transition-all duration-200"
                onClick={() => handleFilterSelect('genre', genre.mal_id.toString())}
              >
                {genre.name}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar className="bg-zinc-900/95 w-[300px] backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 rounded-[8px] shadow-lg">
        <MenubarMenu>
          <MenubarTrigger className="text-zinc-400 justify-between w-full hover:text-white data-[state=open]:bg-zinc-800 data-[state=open]:text-white transition-all duration-200">
              {orderByOptions.find(order => order.value === searchParams.get('order'))?.name || 'Order by'}
              {!searchParams.get('order') ? (<ChevronDownIcon size={16}/>):(
                <button onClick={() => handleFilterSelect('order', '')}>
                  <XIcon size={16}/>

                </button>)}
          </MenubarTrigger>
          <MenubarContent className="bg-zinc-900/95 w-[300px] backdrop-blur-sm border border-zinc-800 rounded-lg shadow-lg">
            {orderByOptions.map((order) => (
              <MenubarItem 
                key={order.value}
                className="text-zinc-400 hover:cursor-pointer hover:text-white hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white transition-all duration-200"
                onClick={() => handleFilterSelect('order', order.value)}
              >
                {order.name}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>
  )
}