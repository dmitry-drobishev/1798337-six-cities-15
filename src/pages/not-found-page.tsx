import {Link} from 'react-router-dom';
import { AppRoute } from '../components/const';

function NotFoundPage(): JSX.Element {
  return(
    <div>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={AppRoute.Main}>Перейти на главную страницу</Link>
    </div>
  );
}

export default NotFoundPage;
