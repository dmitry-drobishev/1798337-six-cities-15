import { useRef, useEffect } from 'react';
import { OfferType } from '../../mock/offers-mock';
import { defaultMapIcon, currentMapIcon } from './consts';
import useMap from './use-map';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CitiesType, cities } from '../../mock/cities-mock';

export type MapPropsType = {
  activeCity: CitiesType['name'];
  offers: OfferType[];
  activeOffer: OfferType | null;
};

export default function Map({activeCity, offers, activeOffer}: MapPropsType): React.JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement| null>(null);
  const currentCity = cities.find((el) => el.name === activeCity);
  const map = useMap(mapContainerRef, cities[3]);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map && currentCity) {
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [currentCity, map]);

  useEffect((): void => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        {icon: activeOffer && offer.id === activeOffer.id ? currentMapIcon : defaultMapIcon}
        )
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section className="cities__map map" style={{ width: '512px' }} ref={mapContainerRef}></section>
  );
}
