import MainPage from '../../pages/main-page';
import { OfferType } from '../../mock/offers-mock';

type Offers = {
  offers: OfferType[];
}

function App({offers} : Offers): JSX.Element {
  return (
    <MainPage offers = {offers} />
  );
}

export default App;
