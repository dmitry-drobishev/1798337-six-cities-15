import { useEffect, useRef, useState, RefObject} from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import {TileLayer} from 'leaflet';
import { CitiesType } from '../../mock/cities-mock';

export default function useMap(MapContainerRef: RefObject<HTMLDivElement | null>, city: CitiesType) {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderRef = useRef<boolean>(false);
  useEffect((): void => {
    if (MapContainerRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(MapContainerRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      }
      );

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [MapContainerRef, city]);

  return map;
}
