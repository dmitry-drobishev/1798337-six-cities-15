import type { OfferType } from '../mock/offers-mock';
import OfferCard from './offer-card';
import { useState } from 'react';
import { Nullable } from 'vitest';

export default function FavoritesCardList(props: { offers: OfferType[]; cardClassName:string }) {
  const {offers, cardClassName} = props;

  const [, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  return(
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.map((offer) => (
            <OfferCard key={offer.id} handleHover={handleOfferHover} offer={offer} cardClassName={cardClassName}/>
          ))}
        </div>
      </li>
    </ul>
  );
}
