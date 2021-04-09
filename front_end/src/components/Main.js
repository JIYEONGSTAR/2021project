import React from "react";
import BookCard from "./cards/BookCard";
import "../css/Main.css";
import { Link } from "react-router-dom";
import "../css/BookList.css";
import { Button } from "@material-ui/core";
import BookList from "../containers/DisplayBookList";
function Main(props) {
  console.log(props.data);
  let data = [props.booklist[0], props.booklist[1], props.booklist[2]];

  console.log(data);
  return (
    <>
      <div className="banner">
        <img src="/bannerImg.png" alt="" />
      </div>
      <BookList data={data} />
    </>
  );
}

export default Main;
