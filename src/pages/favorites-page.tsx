import FavoritesCardList from '../components/favorites-card-list';
import type { OfferType } from '../mock/offers-mock';

type MainPageProps = {
  offers: OfferType[];
}

function FavoritePage({offers}:MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesCardList offers = {offers} cardClassName='favorites' />
        </section>
      </div>
    </main>
  );
}

export default FavoritePage;
