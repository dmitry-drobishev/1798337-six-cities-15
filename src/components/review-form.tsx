import { Fragment, ReactEventHandler, useState } from 'react';

type ChangeHandlerType = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export default function ReviewForm() {

  const [review, setReview] = useState({rating: 0, review: ''});

  const ChangeHandler:ChangeHandlerType = (event) => {
    const {name, value} = event.currentTarget;
    setReview ({ ...review, [name] : value});
  };
  const lengthReview = 50;

  const rating = [
    {value: 5, title: 'perfect'},
    {value: 4, title: 'good'},
    {value: 3, title: 'not bad'},
    {value: 2, title: 'badly'},
    {value: 1, title: 'terribly'},
  ];

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({value, title}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={ChangeHandler}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={ChangeHandler}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {review.review.length < lengthReview || review.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
