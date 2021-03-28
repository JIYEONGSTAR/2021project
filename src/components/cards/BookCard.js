import React from "react";
import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <>
      <Link to={props.path} className="card_item">
        {/* <img className="card_img" /> */}
        <h2>{props.text}</h2>
        {/* 이건 프롭스에 따라 고쳐야함 */}
      </Link>
    </>
  );
}

export default BookCard;
