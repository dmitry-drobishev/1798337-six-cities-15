import type { CitiesType } from '../../mock/cities-mock';
import CitiesNavigationItem from './cities-navigation-item';

type CitiesNavListPropsType = {
  activeCity: CitiesType['name'];
  destinations: CitiesType[];
  onCityItemClick: (name: string) => void;
}

export default function CitiesNavigationList({activeCity, destinations, onCityItemClick}:CitiesNavListPropsType): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {destinations.map((city) => (
            <CitiesNavigationItem
              key = {city.id}
              city = {city}
              activeCity={activeCity}
              onCityItemClick = {onCityItemClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
