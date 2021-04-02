import React from "react";
import BookCard from "./cards/BookCard";

import { Link } from "react-router-dom";
import "../css/BookList.css";
// import BookListBySubject from "./BookListBySubject";

function BookList(props) {
  // let data = props.data;
  let list = props.booklist;
  // console.log("data ");
  // console.log(data);
  console.log("list");
  console.log(list);

  const handleAdd = (e) => {
    props.handleBookDetail(e.id);
  };
  let IT = "IT융합자율학부";
  let humanities = "인문융합자율학부";
  let society = "사회융합자율학부";
  let mediacontents = "미디어콘텐츠융합자율학부";
  let culture = "교양";

  return(
  <div>
      <div className="subjectList">
        <Link to="/booklist/humanities">
          <p value="subject" onClick={() => props.handleSubject(humanities)}> 

            인문
          </p>
        </Link>
        <Link to="/booklist/society">
          <p value="subject" onClick={() => props.handleSubject(society)}>
            사회
          </p>
        </Link>
        <Link to="/booklist/mediacontents">
          <p value="subject" onClick={() => props.handleSubject(mediacontents)}>
            미콘
          </p>
        </Link>
        <Link to="/booklist/IT">
          <p value="subject" onClick={() => props.handleSubject(IT)}>
            IT
          </p>
        </Link>
        <Link to="/booklist/culture">
          <p value="subject" onClick={() => props.handleSubject(culture)}>
            교양
          </p>
        </Link>

      </div>
    <div className="bookWrap">
    {list.map(d => 
        <div className="bookList">
          <div className="bookCard">
            <BookCard
              image={d.image}
              title={d.title}
              author={d.author}
              publisher={d.publisher}
              pubDate={d.pubdate}
              isbn={d.isbn}
              subject={d.subject}
              className={d.className}
              professor={d.professor}
              stock={d.stock}
            />
            <Link to={`/bookdetail/${d.id}`}>
              <button value="add" onClick={() => handleAdd(d)}>
                자세히
              </button>
            </Link>
          </div>
        </div>
    
  
  )
  }</div></div>)

       
}

export default BookList;
