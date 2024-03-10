import MainPage from '../../pages/main-page';
import FavoritePage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import Layout from '../layout/layout';
import { OfferType } from '../../mock/offers-mock';
import { AppRoute } from '../const';
import { getAuthorizationStatus } from '../../utils/authtorization-status';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

type Offers = {
  offers: OfferType[];
}

function App({offers} : Offers): JSX.Element {
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
                <FavoritePage />
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
            element={<OfferPage />}
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
