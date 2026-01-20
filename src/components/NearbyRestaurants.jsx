import { Geocoder } from '@mapbox/search-js-react'
import { useState } from 'react'
import { getDistance } from '../helpers/getDistance'
import { RestaurantItem } from './RestaurantItem'

export const NearbyRestaurants = ({restaurants}) => {
  const [meters, setMeters] = useState(0)
  const [coordenadas, setCoordenadas] = useState({ lng:0, lat:0 })
  const [restaurantsNearby, setRestaurantsNearby] = useState([])
  const [searching, setSearching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!meters || !coordenadas.lng || !coordenadas.lat) {
      alert('Todos los campos son obligatorios ')
      return
    }

    const metersInt = parseInt(meters)
    const nearby = restaurants.filter(val => {
      const {lng, lat} = val.address.location;
      const distance = getDistance(coordenadas.lat, coordenadas.lng, lat, lng);
      return distance < metersInt;
    })
    setRestaurantsNearby(nearby)
    setSearching(true);
  }

  return (
    <>
      <h2 className="font-semibold lg:text-xl">Buscar restaurantes cercanos</h2>
      
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4 p-5 bg-gray-100 rounded-lg shadow-md mt-6">
        <div className="flex flex-col gap-1 space-y-4">

          <div className="flex flex-col gap-1">
            <label htmlFor="metros" className="font-bold text-gray-700 text-sm">Distancia (metros):</label>
            <input
              type="number"
              id="metros"
              name="metros"
              value={meters}
              onChange={(e) => {setMeters(e.target.value)}}
              placeholder="Ej: 500"
              min="0"
              className="px-2.5 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>


          <div>
            <label htmlFor="calle" className="font-bold text-gray-700 text-sm">Ingresa tu dirección:</label>
            <Geocoder
                accessToken='pk.eyJ1IjoibHVpc3B2IiwiYSI6ImNta211dGtvdTBqajczZG9pMzA3MTJiaTkifQ.6PFy6wEMwWysfes7ZhhzyQ'
                options={{
                  language: 'en',
                  country: 'MX',
                }}
                onRetrieve={(result) => {
                  const [lng, lat] = result.geometry.coordinates;
                  setCoordenadas({lng, lat})
                }}
                onChange={(e) => {
                  if (!e) {
                    setCoordenadas({ lng: 0, lat: 0 });
                  }
                }}
              />
            </div>
        </div>

        <div className="flex gap-2.5 mt-2.5">
          <button type="submit" className="flex-1 px-2.5 py-2.5 bg-green-500 hover:bg-green-600 text-white border-none rounded font-bold text-sm cursor-pointer transition">
            Buscar Restaurantes
          </button>
        </div>
      </form>

      <div className="flex gap-6 py-8 overflow-auto">
        {
          searching && restaurantsNearby.length === 0 
          ? <p className='mx-auto text-sm'>No se encontraron restaurantes cercanos</p>
          : restaurantsNearby.map((restaurant) => (
              <div key={restaurant.id} className="min-w-70 max-w-70">
                <RestaurantItem restaurant={restaurant}/>
              </div>
            ))
        }
      </div>
    </>
  )
}
