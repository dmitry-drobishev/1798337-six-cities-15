function DestinationsNavigationItem(props: {destination: string}): JSX.Element {
  const {destination} = props;
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{destination}</span>
      </a>
    </li>
  );
}

export default DestinationsNavigationItem;
