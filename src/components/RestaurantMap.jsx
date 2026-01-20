import mapboxgl from 'mapbox-gl'; 
import { useEffect, useRef } from 'react';
import { getGeojsonObject } from '../helpers/getGeoJSONObject';


export const RestaurantMap = ({restaurants}) => {
  const mapContainer = useRef(null);


  useEffect(() => {
    if (!mapContainer.current) return;

    const geoJSONObject = getGeojsonObject(restaurants);

    mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc3B2IiwiYSI6ImNta211dGtvdTBqajczZG9pMzA3MTJiaTkifQ.6PFy6wEMwWysfes7ZhhzyQ';
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-99.12865767750226, 19.437904276994995],
      zoom: 5,
      projection: 'globe'
    });

    const popup = new mapboxgl.Popup({ closeOnClick: true });

    map.on('load', () => {
      const firstFeature = geoJSONObject.data.features[0];
      if (firstFeature) {
        const [lng, lat] = firstFeature.geometry.coordinates;
        map.flyTo({
          center: [lng, lat],
          zoom: 15,
          speed: 1.8,
          curve: 1,
          essential: true
        });
      }

      for (const marker of geoJSONObject.data.features) {
        const el = document.createElement('div');
        el.className = 'marker';

        el.innerHTML = `
          <div class="star">⭐</div>
          <div class="rating">${marker.properties.rating}</div>
        `;

        el.addEventListener('click', (e) => {
          e.stopPropagation();
          popup
            .setLngLat(marker.geometry.coordinates)
            .setHTML(marker.properties.description)
            .addTo(map);
        });

        new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      }
    });

    return () => map.remove();
}, [restaurants]);
 

  return (
    <div>
      <div className='pb-6'>
        <h2 className='font-semibold lg:text-xl'>Explora y encuentra en el mapa los mejores restaurantes.</h2>
      </div>

      <div className='flex justify-center'>
        <div ref={mapContainer} style={{ width: '800px', height: '400px' }}></div>
      </div>
    </div>
  )
}

