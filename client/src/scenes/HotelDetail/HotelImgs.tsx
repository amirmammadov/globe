import "../../sass/scenes/_hotelImgs.scss";

const HotelImgs = () => {
  return (
    <div className="hotel__imgs">
      <div className="hotel__imgs__all">
        <img src="/assets/hotels/hotel-detail1.jpg" alt="hotel" />
        <img src="/assets/hotels/hotel-detail2.jpg" alt="hotel" />
        <img src="/assets/hotels/hotel-detail3.jpg" alt="hotel" />
        <img src="/assets/hotels/hotel-detail4.jpg" alt="hotel" />
        <img src="/assets/hotels/hotel-detail5.jpg" alt="hotel" />
      </div>
      <button className="hotel__imgs__view">View all photos</button>
    </div>
  );
};

export default HotelImgs;
