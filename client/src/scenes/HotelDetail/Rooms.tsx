import "../../sass/scenes/_room.scss";

import { availableRooms } from "../../data/hotels";

const Rooms = () => {
  return (
    <div className="hotel__rooms">
      <div className="hotel__rooms__title">Available Rooms</div>
      <div className="hotel__rooms__items">
        {availableRooms.map((room) => (
          <div key={room.id} className="hotel__rooms__items__item">
            <div className="hotel__rooms__items__item__img">
              <img src={`/assets/hotels/${room.imgUrl}`} alt="room" />
            </div>
            <div className="hotel__rooms__items__item__advants">
              {room.advants.map((advant, index) => (
                <div
                  key={index}
                  className="hotel__rooms__items__item__advants__list"
                >
                  {advant}
                </div>
              ))}
            </div>
            <div className="hotel__rooms__items__item__price">
              {`$${room.pricePerNight}`}
              <span>/night</span>
            </div>
            <button className="hotel__rooms__items__item__btn">Book now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
