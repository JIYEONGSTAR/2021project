import React from "react";
import "../css/Main.css";
import BookList from "../containers/DisplayBookList";
import ServiceCard from "./cards/ServiceCard";

function Main(props) {
  let data = [props.booklist[0], props.booklist[1], props.booklist[2]];
  return (
    <>
      <div className="banner">
        <img src="/bannerImg.png" alt="" />
      </div>
      <BookList data={data} />
      <div className="service">
        <p>추후서비스</p>
        <div className="service__card">
          <ServiceCard image="/future1.jpg" />
          <ServiceCard image="/future2.jpg" />
          <ServiceCard image="/future3.jpg" />
          <ServiceCard image="/future4.jpg" />
        </div>
      </div>
    </>
  );
}

export default Main;
