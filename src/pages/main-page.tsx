import CitiesNavigationList from '../components/cities-navigation/cities-navigation-list.js';
import OffersCardList from '../components/offers-card-list';
import type { OfferType } from '../mock/offers-mock';
import { CitiesType, cities } from '../mock/cities-mock.ts';
import { useState } from 'react';

export type CitiesList = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityPropsType = {
  name: CitiesList;
  location: LocationType;
}

type MainPageProps = {
  offers: OfferType[];
}

function MainPage({offers}:MainPageProps): JSX.Element {

  const [activeCity, setActiveCity] = useState<CitiesType['name']>(cities[3].name);

  function onCityItemClick(cityName: CitiesType['name']): void {
    cities.find((city) => {
      if (city.name === cityName) {
        setActiveCity(cityName);
      }
    });
  }

  return (
    <main className="page__main page__main--index">
      <CitiesNavigationList destinations = {cities} activeCity = {activeCity} onCityItemClick={onCityItemClick} />
      <div className="cities">
        <OffersCardList offers = {offers} cardClassName='cities' activeCity = {activeCity} />
      </div>
    </main>
  );
}

export default MainPage;
