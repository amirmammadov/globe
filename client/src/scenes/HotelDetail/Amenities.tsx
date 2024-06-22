import { useState } from "react";

import "../../sass/scenes/_amenities.scss";

import { amenities } from "../../data/amenities";

const initialLeng = 9;

const Amenities = () => {
  const [leng, setLeng] = useState(initialLeng);

  const remainPart = amenities.slice(leng).length;

  const handleMoreBtn = () => {
    if (leng === initialLeng) {
      setLeng(amenities.length);
    } else {
      setLeng(initialLeng);
    }
  };

  return (
    <div className="amenities">
      <div className="amenities__title">Amenities</div>
      <div className="amenities__lists">
        {amenities.slice(0, leng).map((amenity) => (
          <div key={amenity.id} className="amenities__lists__item">
            {amenity.text}
          </div>
        ))}
        <div className="amenities__lists__btn" onClick={handleMoreBtn}>
          {leng === initialLeng ? `+${remainPart} more` : "show less"}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
