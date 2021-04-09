import React from "react";
import "../css/Main.css";
import "../css/BookList.css";
import BookList from "../containers/DisplayBookList";

function Main(props) {
  let data = [props.booklist[0], props.booklist[1], props.booklist[2]];
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
