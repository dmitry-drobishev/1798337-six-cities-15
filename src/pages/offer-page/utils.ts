import { OfferType, OffersMock } from '../../mock/offers-mock';

const MAX_NEAR_OFFERS_COUNT = 3;

export const getNearOffers = (offer : OfferType) : OfferType[] => {
  const nearOffers: OfferType[] = [];

  for (let i = 0; i < OffersMock.length; i++) {
    if (OffersMock[i].id !== offer.id && OffersMock[i].city.name === offer.city.name) {
      nearOffers.push(OffersMock[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS_COUNT) {
      break;
    }
  }

  return nearOffers;
};
