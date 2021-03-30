import React from "react";
// import { Link } from "react-router-dom";
import "../../css/cards/BookCard.css";
function BookCard(props) {
  return (
    <div class="cards__items">
      <img className="card_img" src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.professor}</p>
      <p>{props.className}</p>
      {/* 이건 프롭스에 따라 고쳐야함 */}
    </div>
  );
}

export default BookCard;
