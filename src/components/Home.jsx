import { useMemo, useState } from "react";
import { useRestaurants } from "../hooks/useRestaurants"
import { RestaurantsList } from "./RestaurantsList";
import { IoMdRestaurant } from "react-icons/io";
import { SortRestaurant } from "./SortRestaurants";
import { Loading } from "./Loading";
import { RestaurantMap } from "./RestaurantMap";

export const Home = () => {

  const { data, isLoading } = useRestaurants();
  const [sortBy, setSortBy] = useState('');
  const [isSorting, setIsSorting] = useState(false);

  const handleSortChange = (value) => {
    setIsSorting(true);
    setSortBy(value);
    setTimeout(() => setIsSorting(false),50)
  }

  const sortedData = useMemo(() => {
    if(!data) return [];

    const copyData =  [...data];

    switch (sortBy) {
      case 'name-asc':
        return copyData.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return copyData.sort((a, b) => b.name.localeCompare(a.name));
      case 'rating-desc':
        return copyData.sort((a, b) => b.rating - a.rating);
      case 'rating-asc':
        return copyData.sort((a, b) => a.rating - b.rating);
      default:
        return copyData;
    }
  }, [data, sortBy])

  return (
    <div className='p-6 lg:pt-10 pb-22 lg:px-0'>
      <div className='text-center space-y-2 lg:space-y-6 h-96'>
        <div className="flex justify-center"><IoMdRestaurant size={100}/></div>
        <h1 className='text-xl lg:text-4xl'>Bienvenido a <span className='text-orange-600 font-bold'>Melp</span></h1>
        <p className='lg:text-2xl'>Encuentra los mejores restaurantes de la ciudad fácil y rápido.</p>
      </div>

      <div>
        <h2 className="font-semibold lg:text-xl">Busca y encuentra los mejores restaurantes disponibles para ti.</h2>

        { (isLoading || isSorting ) && <Loading /> }
        { !isLoading && !isSorting && sortedData.length === 0 && <p className="text-center py-10 text-sm">No se encontraron restaurantes</p> }
        { !isLoading && !isSorting && sortedData.length > 0 && 
        <div className="space-y-10">
          <SortRestaurant sortBy={sortBy} onSortChange={handleSortChange} />
          <RestaurantsList restaurants={sortedData} />
          <RestaurantMap restaurants={sortedData} />
        </div> 
        }
      </div>
    </div>
  )
}
