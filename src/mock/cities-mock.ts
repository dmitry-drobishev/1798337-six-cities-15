export type CitiesType = {
  name: string;
  id: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export const cities:CitiesType[] = [
  {
    name: 'Paris',
    id: 1,
    location: {
      latitude: 48.856663,
      longitude: 2.351556,
      zoom: 11,
    }
  },
  {
    name: 'Cologne',
    id: 2,
    location: {
      latitude: 50.930779,
      longitude: 6.938399,
      zoom: 11,
    }
  },
  {
    name: 'Brussels',
    id: 3,
    location: {
      latitude: 50.854283,
      longitude: 4.352131,
      zoom: 11,
    }
  },
  {
    name: 'Amsterdam',
    id: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    }
  },
  {
    name: 'Hamburg',
    id: 5,
    location: {
      latitude: 53.567103,
      longitude: 9.941934,
      zoom: 11,
    }
  },
  {
    name: 'Dusseldorf',
    id: 6,
    location: {
      latitude: 51.230569,
      longitude: 6.787428,
      zoom: 11,
    }
  },
];
