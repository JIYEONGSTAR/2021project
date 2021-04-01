import React from "react";
import BookCard from "./cards/BookCard";
import { Link } from "react-router-dom";
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
        <Link to={"/mypage"}>
          <button value="add" onClick={() => props.onAdd(d)}>
            빌리기
          </button>
        </Link>
        <p>남아있는 재고={d.stock}</p>
      </div>
    );
  });
}

export default BookList;
