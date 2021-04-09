import { Box } from "@material-ui/core";
import React from "react";
import "../../css/cards/NoticeCard.css";
function NoticeCard(props) {
  return (
    <div className="notice-column">
      <details>
        <summary>
          <span>Q{props.id}.</span> {props.question}
        </summary>
        <p><span>A{props.id}.</span> {props.answer}</p>
      </details>
    </div>
  );
}

export default NoticeCard;
