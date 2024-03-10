export type OfferType =
{
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};


const OffersMock: OfferType[] = [
  {
    'id': 'a4938522-593f-4b60-8c61-8b21a1e0f319',
    'title': 'Loft Studio in the Central Area 1',
    'type': 'apartment',
    'price': 446,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.7
  },

  {
    'id': 'a4938522-593f-4b60-8c61-8b21a1e0f318',
    'title': 'Loft Studio in the Central Area 2',
    'type': 'apartment',
    'price': 447,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '2553ecac-7e1f-4a40-8f49-7bcd76ab4ad1',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 250,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '496a6142-36e9-437c-a082-27ed41c03187',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 183,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '357975ea-58b0-4413-b85e-6af96630b74b',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 497,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'eb7d8ba6-0e99-435c-a2b6-6e2c9262286f',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 467,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'e22b557b-b525-4c98-8fe2-0dcc9142bbd7',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 313,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '0a277736-cc76-4088-883d-07e0ec74e1d9',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 297,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '654a7d5a-9365-4c72-b715-43ff42dced4b',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 301,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
];

export {OffersMock};
