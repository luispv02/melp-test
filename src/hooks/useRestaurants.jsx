import { useQuery } from "@tanstack/react-query"
import { getRestaurants } from "../actions/getRestaurants"

export const useRestaurants = () => {
  return useQuery({ 
    queryKey: ['restaurants'], 
    queryFn: getRestaurants
  })
}

