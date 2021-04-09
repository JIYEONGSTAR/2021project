import React from "react";
import "../../css/cards/DetailCard.css";
function DetailCard(props) {
  return (
    <div className="detail_wrap">
      <div className="detail__column">
        <img className="detail_img" src={props.image} alt="" />
      </div>
      <div className="detail__column">
        <div className="detail__title">
          <p>{props.title}</p>
        </div>
        <div className="detail__contents">
          <p>
            <span>저자:</span> {props.author}
          </p>
          <p>
            <span>출판사:</span> {props.publisher}
          </p>
          <p>
            <span>출판일:</span> {props.pubDate}
          </p>
          <p>
            <span>가격:</span> {props.price}
          </p>
          <p>
            <span>재고:</span> {props.stock}
          </p>
          <p>
            <span>학부:</span> {props.subject}
          </p>
          <p>
            <span>수업명:</span> {props.className}
          </p>
          <p>
            <span>교수:</span> {props.professor}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
