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
      <div className="subjectList">
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleAll();
          }}
        >
          ALL
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(humanities);
            // setList(booklist);
          }}
        >
          인문
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(society);
            // setList(booklist);
          }}
        >
          사회
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(mediacontents);
            // setList(booklist);
          }}
        >
          미콘
        </Button>

        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(IT);
            // setList(booklist);
          }}
        >
          IT
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(culture);
            // setList(booklist);
          }}
        >
          교양
        </Button>
      </div>
      <BookList data={data} />
    </>
  );
}

export default Main;
