import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute} from '../const';
import Header from '../header';

export default function Layout() {

  // const {pathname} = useLocation();
  // const authorizationStatus = getAuthorizationStatus();

  // let rootClassName = '';
  // let linkClassName = '';
  // let shouldRenderUser = true;

  // if (pathname as AppRoute === AppRoute.Main) {
  //   rootClassName = 'page--gray page--main';
  //   linkClassName = 'header__logo-link--active';
  // } else if (pathname as AppRoute === AppRoute.Login) {
  //   rootClassName = 'page--gray page--login';
  //   shouldRenderUser = false;
  // }

  let shouldRenderFooter = false;
  const {pathname} = useLocation();

  if (pathname as AppRoute === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return (
    <>
      <Header />
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
