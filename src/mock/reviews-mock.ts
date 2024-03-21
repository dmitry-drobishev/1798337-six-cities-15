export type ReviewType = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

const ReviewsMock: ReviewType[] = [
  {
    'id': '1',
    'date': '2018-05-08T14:13:56.569Z',
    'user': {
      'name': 'Ivan Ivanov',
      'avatarUrl': 'img/apartment-03.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 5
  },
  {
    'id': '2',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Egor Egorov',
      'avatarUrl': 'img/apartment-03.jpg',
      'isPro': false
    },
    'comment': 'Beautiful & luxurious studio at great location',
    'rating': 4
  },
  {
    'id': '3',
    'date': '2020-05-08T14:13:56.569Z',
    'user': {
      'name': 'Vasya',
      'avatarUrl': 'img/apartment-03.jpg',
      'isPro': true
    },
    'comment': 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'rating': 3.5,
  },
  {
    'id': '4',
    'date': '20121-05-08T14:13:56.569Z',
    'user': {
      'name': 'Ibragim',
      'avatarUrl': 'img/apartment-03.jpg',
      'isPro': true
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'rating': 1
  },
];

export { ReviewsMock };
