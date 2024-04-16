import { AuthorizationStatus } from '../../components/const';
import { useParams } from 'react-router-dom';
import { getAuthorizationStatus } from '../../utils/authtorization-status';
import type { OfferType } from '../../mock/offers-mock';
import NotFoundPage from '../not-found-page';
import Review from '../../components/review';
import type { ReviewType } from '../../mock/reviews-mock';
import ratingInProsent from '../../utils/utils';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card';
import { getNearOffers } from './utils';

type OfferPageProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function OfferPage({offers, reviews}: OfferPageProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const {id} = useParams();
  const currentOffer: OfferType | undefined = offers.find((offer: OfferType) => offer.id === id);
  const nearOffers = getNearOffers(currentOffer);
  const nearOffersPlusCurrent = [currentOffer, ...nearOffers];

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const {images, isPremium, title, rating, host, price, type, description, goods, bedrooms, maxAdults} = currentOffer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            { images.map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img
                  className="offer__image"
                  src={image}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (<div className="offer__mark"> <span>Premium</span></div>)}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: ratingInProsent(rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => (
                  <li className="offer__inside-item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                <span className="offer__user-status">
                  {host.isPro && 'Pro'}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
            </div>
            <Review isAuth={authorizationStatus === AuthorizationStatus.Authorization} reviews = {reviews}/>
          </div>
        </div>
        <Map activeCity={currentOffer.city.name} offers={nearOffersPlusCurrent} className='offer__map' activeOffer={currentOffer} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} cardClassName='near-places' />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;

