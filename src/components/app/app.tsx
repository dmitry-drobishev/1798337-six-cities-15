import MainPage from '../../pages/main-page';
import FavoritePage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import Layout from '../layout/layout';
import type { OfferType } from '../../mock/offers-mock';
import { AppRoute } from '../const';
import { getAuthorizationStatus } from '../../utils/authtorization-status';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ReviewType } from '../../mock/reviews-mock';

type AppProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route
            index
            element={<MainPage offers = {offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritePage offers = {offers} />
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isRevers>
                <LoginPage />
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} reviews={reviews} />}
          />
          <Route
            path={'*'}
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
