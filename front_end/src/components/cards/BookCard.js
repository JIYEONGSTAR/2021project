import React from "react";
import "../../css/cards/BookCard.css";
function BookCard(props) {
  return (
    <div className="cards">
      <div className="cards-items">
        <div className="cards-items__column">
          <img className="card_img" src={props.image} alt="" />
        </div>
        <div className="cards-items__column">
          <h3>{props.title}</h3>
          <p>{props.author} 저</p>
          <p>재고:{props.stock}/5</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
