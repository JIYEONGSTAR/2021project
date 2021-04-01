import React from "react";
import BookCard from "./cards/BookCard";
import "../css/BookList.css";
function BookList(props) {

  let data = props.data;
  console.log(data);
  return data.map((d) => {
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
          <button value="add" onClick={() => props.onAdd(d)}>
            {d.id}내 리스트에 추가하기
          </button>
        </div>
        
      </div>
    );
  });
}

export default BookList;
