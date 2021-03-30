import React from "react";
import BookCard from "./cards/BookCard";

function BookList(props) {
  let data = props.data;
  console.log(data);
  return data.map((d) => {
    return (
      <div className="bookList">
        <BookCard
          image={d.image}
          title={d.title}
          professor={d.professor}
          className={d.className}
        />
        <button value="add" onClick={() => props.onAdd(d)}>
          {d.id}내 리스트에 추가하기
        </button>
      </div>
    );
  });
}

export default BookList;
