import "../../sass/scenes/_flightImgs.scss";

const images = [
  "detail1.jpg",
  "detail2.jpg",
  "detail3.jpg",
  "detail4.jpg",
  "detail2.jpg",
  "detail3.jpg",
  "detail4.jpg",
  "detail2.jpg",
];

const FlightImgs = () => {
  return (
    <div className="flightImgs">
      <div className="flightImgs__main">
        <img src="/assets/airlines/detail3.jpg" alt="airline" />
        <div className="flightImgs__main__overlay" />
      </div>
      <div className="flightImgs__info">
        <div className="flightImgs__info__header">
          <div className="flightImgs__info__header__title">
            Basic Economy Features
          </div>
          <div className="flightImgs__info__header__checks">
            <div className="flightImgs__info__header__checks__item">
              <input type="checkbox" id="economy" />
              <label htmlFor="economy">Economy</label>
            </div>
            <div className="flightImgs__info__header__checks__item">
              <input type="checkbox" id="first" />
              <label htmlFor="first">First class</label>
            </div>
            <div className="flightImgs__info__header__checks__item">
              <input type="checkbox" id="business" />
              <label htmlFor="business">Business class</label>
            </div>
          </div>
        </div>
        <div className="flightImgs__info__slider">
          {images.map((img, index) => (
            <div key={index} className="flightImgs__info__slider__item">
              <img src={`/assets/airlines/${img}`} alt="airport" />
            </div>
          ))}
        </div>
        <div className="flightImgs__info__policies">
          <div className="flightImgs__info__policies__title">
            Emirates Airlines Policies
          </div>
          <div className="flightImgs__info__policies__desc">
            <div className="flightImgs__info__policies__desc__item">
              Pre-flight cleaning, installation of cabin HEPA filters
            </div>
            <div className="flightImgs__info__policies__desc__item">
              Pre-flight health screening questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightImgs;
