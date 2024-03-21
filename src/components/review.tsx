import type { ReviewType } from '../mock/reviews-mock';
import ReviewForm from './review-form';
import ReviewsList from './reviews-list';

type ReviewPropsType = {
  isAuth: boolean;
  reviews: ReviewType[];
}

export default function Review({isAuth, reviews}:ReviewPropsType) {
  return(
    <>
      <ReviewsList reviews = {reviews} />
      {isAuth && <ReviewForm />}
    </>
  );
}
