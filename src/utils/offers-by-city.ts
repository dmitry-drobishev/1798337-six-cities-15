// import type { OfferType } from "../mock/offers-mock";

// export type TOffersByCity = {
//   city: TCity;
//   offers: OfferType[];
// }

// export function getOffersByCity(offers: OfferType[]): TOffersByCity[] {
//   const offersByCity: TOffersByCity[] = [];
//   offers.forEach((offer) => {
//     const cityIndex: number = offersByCity.findIndex((group) => group.city.name === offer.city.name);
//     if (cityIndex !== -1) {
//       offersByCity[cityIndex].offers.push(offer);
//     } else {
//       offersByCity.push({city: offer.city, offers: [offer]});
//     }
//   });

//   return offersByCity;
// }
