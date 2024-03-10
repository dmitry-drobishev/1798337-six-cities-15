import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute} from '../const';
import Header from '../header';

export default function Layout() {
  let shouldRenderFooter = false;
  const {pathname} = useLocation();

  if (pathname as AppRoute === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return (
    <>
      <Header pathname as AppRoute = {pathname} />
      <Outlet />
      {shouldRenderFooter ? (
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      ) : null}
    </>
  );
}
