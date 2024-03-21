import { getAuthorizationStatus } from '../utils/authtorization-status';
import { AppRoute } from './const';
import { AuthorizationStatus } from './const';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header():JSX.Element {

  const {pathname} = useLocation();
  const authorizationStatus = getAuthorizationStatus();

  let linkClassName = '';
  let shouldRenderUser = true;

  if (pathname as AppRoute === AppRoute.Main) {
    linkClassName = 'header__logo-link--active';
  } else if (pathname as AppRoute === AppRoute.Login) {
    shouldRenderUser = false;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link${linkClassName}`} to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {authorizationStatus === AuthorizationStatus.Authorization ? (
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </>) : <span className="header__login">Sign in</span>}
                    </a>
                  </li>
                  {authorizationStatus === AuthorizationStatus.Authorization ? (
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
