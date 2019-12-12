import React from "react";
import "./FlipCard.css";

const FlipCard = props => {
  return (
    <div className="flip-card">
      <div className="flipper">
        <div className="flip-card_front">{props.frontComponent}</div>
        <div className="flip-card_back">{props.backComponent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
