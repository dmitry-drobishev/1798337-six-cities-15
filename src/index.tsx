import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mock/offers-mock';
import { ReviewsMock } from './mock/reviews-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {OffersMock}
      reviews = {ReviewsMock}
    />
  </React.StrictMode>
);
