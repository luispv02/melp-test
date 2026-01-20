export const getRestaurants = async() => {
  const url = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'
  const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
  const response = await fetch(proxyUrl);
  const data = await response.json()

  return data;
}