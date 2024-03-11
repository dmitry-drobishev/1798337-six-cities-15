export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationType;
};
export type HostType = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
}

const OffersMock: OfferType[] = [
  {
    'id': '1',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      } },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating',
      'Wi-Fi',
      'Cabel TV'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-max.jpg',
      'isPro': false
    },
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg'
    ],
    'maxAdults': 4
  },

  {
    'id': '2',
    'title': 'Loft Studio in the Central Area 1',
    'type': 'apartment',
    'price': 228,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      } },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'img/apartment-03.jpg'
    ],
    'maxAdults': 4
  },

];

export { OffersMock };
