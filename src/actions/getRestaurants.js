export const getRestaurants = async() => {
  // const url = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'
  const response = await fetch(`${import.meta.env.BASE_URL}data/restaurants.json`)
  const data = await response.json()

  return data;
}