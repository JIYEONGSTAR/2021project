import { Box } from "@material-ui/core";
import React from "react";
import "../../css/cards/NoticeCard.css";
function NoticeCard(props) {
  return (
    <Box boxShadow={3}>
      <p>{props.id}</p>
      <div>Q:{props.question}</div>
      <div>A:{props.answer}</div>
    </Box>
  );
}

export default NoticeCard;
