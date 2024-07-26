import { supabase } from "@/services/supabase";



export const fetchPopular = async () => {



   const { data } = await supabase 
     .from('most_popular')
     .select('*')

     console.log(data)
  return data
}  