
import classNames from 'classnames';
import { CitiesType } from '../../mock/cities-mock';
import { CityType } from '../../mock/offers-mock';

type DestinationsNavigationItemPropsType = {
  city: CitiesType;
  activeCity: CityType['name'];
  onCityItemClick: (name: string) => void;
}
export default function CitiesNavigationItem({city, activeCity, onCityItemClick}:DestinationsNavigationItemPropsType): JSX.Element {

  const handleClick = () => {
    onCityItemClick(city.name);
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <a
        className={classNames('locations__item-link tabs__item', {'tabs__item--active': city.name === activeCity})}
        href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
