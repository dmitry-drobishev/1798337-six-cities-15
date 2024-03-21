import { Link } from 'react-router-dom';
import type { OfferType } from '../mock/offers-mock';
import ratingInProsent from '../utils/utils';

type OfferCardPropsType = {
  offer:OfferType;
  handleHover: (offer?:OfferType) => void;
  cardClassName: string;
}

function OfferCard({offer, handleHover, cardClassName}:OfferCardPropsType): JSX.Element {

  const {id, title, type, price, isFavorite, isPremium, rating, images} = offer;

  const classFavoriteButton = isFavorite ? 'place-card__bookmark-button--active' : '';

  const handleMouseOn = () => {
    handleHover(offer);
  };

  const handleMouseOff = () => {
    handleHover();
  };

  return (
    <Link to={`/${'offer'}/${offer.id}`}>
      <article className={`${cardClassName}__card place-card`} data-id={id} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
        <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>

          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />

        </div>
        <div className={`${cardClassName}__card-info place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${classFavoriteButton} button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingInProsent(rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
