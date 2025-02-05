import { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./Rating.css";

export const Rating = () => {
  const [selectedRate, setSelectedRate] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleMouseOverStar = (value) => {
    setHoverValue(value);
    if (selectedRate) {
      setHoverValue();
    }
  };

  return (
    <div className="ratingSystem">
      <div className="stars_wrapper">
        {[...Array(5)].map((_, index) => {
          return (
            <div className="stars_container" key={index}>
              <FaStar
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedRate(index + 1)}
                color={(hoverValue || selectedRate) > index ? "gold" : ""}
                size={30}
                onMouseOver={() => handleMouseOverStar(index + 1)}
              />
            </div>
          );
        })}
      </div>
      <div className="ratingNotes">
        {selectedRate > 3 ? (
          <span className="rating" style={{ color: "green" }}>
            great movie!
          </span>
        ) : (
          ""
        )}
        {selectedRate === 3 ? (
          <span className="rating" style={{ color: "orange" }}>
            not bad!
          </span>
        ) : (
          ""
        )}
        {selectedRate === 2 ? (
          <span className="rating" style={{ color: "red" }}>
            awful movie!
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
