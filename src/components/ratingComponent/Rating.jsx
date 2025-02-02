import { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./Rating.css";

export const Rating = () => {
  const [selectedRate, setSelectedRate] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleMouseOverStar = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeaveStar = (value) => {};

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[...Array(5)].map((_, index) => {
        return (
          <div key={index}>
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
  );
};
