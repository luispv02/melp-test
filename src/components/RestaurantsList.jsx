import { RestaurantItem } from "./RestaurantItem"

export const RestaurantsList = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 justify-center mx-auto">
      {
        restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
        ))
      }
    </div>
  )
}