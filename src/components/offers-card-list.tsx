import type { CityType, OfferType } from '../mock/offers-mock';
import { useState } from 'react';
import OfferCard from './offer-card';
import Map from './map/map';

function OffersCardList(props: { offers: OfferType[]; cardClassName:string; activeCity:CityType['name'] }): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{props.offers.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
              Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
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
      </section>
      <div className="cities__right-section">
        <Map activeCity={props.activeCity} offers={props.offers} activeOffer = {activeOffer} className='cities__map' />
      </div>
    </div>
  );
}

export default OffersCardList;
