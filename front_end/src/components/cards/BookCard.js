import React from "react";
// import { Link } from "react-router-dom";
import "../../css/cards/BookCard.css";
function BookCard(props) {
  return (
    <div class="cards">
      <div class="cards-items">
        <div class="cards-items__column">
          <img className="card_img" src={props.image} alt="" />
        </div>
        <div class="cards-items__column">
          <h3>{props.title}</h3>
          <p>{props.author} 저</p>
          <p>재고:{props.stock}/5</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
