import React from "react";
import BookCard from "./cards/BookCard";

import { Link } from "react-router-dom";

import "../css/BookList.css";
// import BookListBySubject from "./BookListBySubject";

function BookList(props) {
  let data = props.data;
  let list = props.booklist;
  console.log("data ");
  console.log(data);
  console.log("list");
  console.log(list);

  const handleAdd = (e) => {
    props.handleMyList(e.id);
  };

  return list.map((d) => {
    return (
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
          <Link to={"/mypage"}>
            <button value="add" onClick={() => handleAdd(d)}>
              빌리기
            </button>
          </Link>
          <p>남아있는 재고={d.stock}</p>
        </div>
      </div>
    );
  });
}

export default BookList;
