import DestinationsNavigationItem from './destination-navigation-item';

type DestinationProps = {
  destinations: string[];
}

function DestinationsNavigationList(props: DestinationProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {props.destinations.map((destination) => (
            <DestinationsNavigationItem
              key = {destination}
              destination = {destination}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default DestinationsNavigationList;
