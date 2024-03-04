import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { getAuthorizationStatus } from '../../utils/authtorization-status';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;

  if (pathname === AppRoute.Main) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  }

  return {rootClassName, linkClassName, shouldRenderUser};
};

export default function Layout() {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderUser} = getLayoutState(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className={`header__logo-link${linkClassName}`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
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
      <Outlet />
    </div>
  );
}
