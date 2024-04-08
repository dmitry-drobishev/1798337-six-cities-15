const DESTINATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = 'offer/:id',
}

enum AuthorizationStatus {
  Authorization = 'Authorization',
  NoAuthorization = 'NoAuthorization',
  Unknown = 'Unknown',
}


export {DESTINATIONS, AppRoute, AuthorizationStatus};
