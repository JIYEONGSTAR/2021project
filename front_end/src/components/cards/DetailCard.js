import React from "react";
import "../../css/cards/DetailCard.css";
function DetailCard(props) {
  return (
    <div className="detail_wrap">
      <div className="detail__column">
        <img className="detail_img" src={props.image} alt="" />
      </div>
      <div className="detail__column">
        <div>{props.title}</div>
        <div className="detail__contents">
          <p>저자:{props.author}</p>
          <p>출판사:{props.publisher}</p>
          <p>가격:{props.price}</p>
          <p>출판일:{props.pubDate}</p>
          <p>
            재고:{props.stock}/5 학부:{props.subjects}
          </p>
          <p>수업명:{props.className}</p>
          <p>교수:{props.professor}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
