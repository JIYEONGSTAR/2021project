import React from "react";
import "../css/Main.css";
// import "../css/BookList.css";
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
        추후서비스
        <div className="service__card">
          <ServiceCard image={"/1.png"} />
          <ServiceCard image={"/2.png"} />
          <ServiceCard image={"3.png"} />
          <ServiceCard image={"4.png"} />
        </div>
      </div>
    </>
  );
}

export default Main;
