import { OfferType } from '../mock/offers-mock';

import PlaceCard from './place-card';

function PlaceCardList(props: { offers: OfferType[] }): JSX.Element {
  return (
    <>
      {props.offers.map((offer: OfferType) => (
        <PlaceCard
          key = {offer.id}
          offer = {offer}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
