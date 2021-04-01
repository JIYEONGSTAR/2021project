import React from "react";
import "../css/cards/BookCard.css";
import { Link } from "react-router-dom";

function Main(props) {
  let IT = "IT융합자율학부";
  let humanities = "인문융합자율학부";
  let society = "사회융합자율학부";
  let mediacontents = "미디어콘텐츠융합자율학부";
  let culture = "교양";
  return (
    <div className="showBook">
      <Link to="/booklist/humanities">
        <p value="subject" onClick={() => props.handleSubject(humanities)}>
          인문융합자율학부
        </p>
      </Link>
      <Link to="/booklist/society">
        <p value="subject" onClick={() => props.handleSubject(society)}>
          사회융합자율학부
        </p>
      </Link>
      <Link to="/booklist/mediacontents">
        <p value="subject" onClick={() => props.handleSubject(mediacontents)}>
          미디어콘텐츠융합자율학부
        </p>
      </Link>
      <Link to="/booklist/IT">
        <p value="subject" onClick={() => props.handleSubject(IT)}>
          아이티융합자율학부
        </p>
      </Link>
      <Link to="/booklist/culture">
        <p value="subject" onClick={() => props.handleSubject(culture)}>
          교양
        </p>
      </Link>
    </div>
  );
}

export default Main;
