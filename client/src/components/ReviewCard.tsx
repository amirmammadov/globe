import "../sass/components/_reviewCard.scss";

interface IProps {
  title: string;
  desc: string;
  rating: number;
  author: string;
  authorWork: string;
  imgUrl: string;
}

const ReviewCard = ({
  title,
  desc,
  rating,
  author,
  authorWork,
  imgUrl,
}: IProps) => {
  return (
    <div className="review__card">
      <div className="review__card__title">{title}</div>
      <div className="review__card__desc">
        <div className="review__card__desc__text">{desc}</div>
      </div>
      <div className="review__card__rating">
        {Array(rating)
          .fill(rating)
          .map((_, index) => (
            <img key={index} src="/assets/icons/star.png" alt="star" />
          ))}
      </div>
      <div className="review__card__user">
        <div className="review__card__user__name">{author}</div>
        <div className="review__card__user__company">{authorWork}</div>
      </div>
      <div className="review__card__google">
        <img src="/assets/icons/google.png" alt="google" />
        <div className="review__card__google__text">Google</div>
      </div>
      <div className="review__card__img">
        <img src={`/assets/landing/${imgUrl}`} alt="review" />
      </div>
    </div>
  );
};

export default ReviewCard;
