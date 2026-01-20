export const getGeojsonObject = (restaurants) => {

  const features = restaurants.map((val) => {

    const starsHTML = [...Array(4)].map((_, i) => {
      return i < val.rating
        ? '<span style="color: gold;">★</span>'
        : '<span style="color: lightgray;">★</span>';
    }).join('');
    
    return {
      type: "Feature",
      properties: {
        description: `
          <div class="flex flex-col items-center p-0">
            <div>${val.name}</div>
            <div>${starsHTML}</div>
          </div>
        `,
        icon: "circle",
        rating: val.rating
      },
      geometry: {
        type: "Point",
        coordinates: [val.address.location.lng, val.address.location.lat],
      },
    };
  });
  const geoJSONObject = {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: features,
    },
    generateId: true,
  };
  return geoJSONObject;
}