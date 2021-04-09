import React from "react";
import "../../css/cards/ServiceCard.css";
function ServiceCard(props) {
  return (
    <div className="aftercard">
      <img className="aftercard_img" src={props.image} alt="" />
    </div>
  );
}

export default ServiceCard;
