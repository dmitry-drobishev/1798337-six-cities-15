import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from './const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isRevers?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, isRevers, children}: PrivateRouteProps) {
  return(
    authorizationStatus === (isRevers ? AuthorizationStatus.NoAuthorization : AuthorizationStatus.Authorization) ?
      children :
      <Navigate to={(isRevers ? AppRoute.Main : AppRoute.Login)}/>
  );
}

