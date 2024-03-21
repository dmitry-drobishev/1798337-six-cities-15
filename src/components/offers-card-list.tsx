import type { OfferType } from '../mock/offers-mock';
import { Nullable } from 'vitest';
import { useState } from 'react';
import OfferCard from './offer-card';

function OffersCardList(props: { offers: OfferType[]; cardClassName:string }): JSX.Element {
  const [, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          handleHover = {handleOfferHover}
          cardClassName={props.cardClassName}
        />
      ))}
    </div>
  );
}

export default OffersCardList;
