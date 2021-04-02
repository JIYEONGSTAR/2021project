import React, { useState } from "react";
import BookCard from "./cards/BookCard";

import { Link } from "react-router-dom";

import "../css/BookList.css";
import InfoCard from "./cards/InfoCard";
// import BookListBySubject from "./BookListBySubject";

function Detail(props) {
  let data = props.data;
  let [edit, setEdit] = useState(false);
  let [open, setOpen] = useState(false);

  const handleDetail = (id) => {
    setEdit(true);
    setOpen(true);
  };
  const handleClose = () => {
    setEdit(false);
    setOpen(false);
  };
  const handleAdd = (e) => {
    props.handleMyList(e.id);
  };

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
            subject={d.subject}
            className={d.className}
            professor={d.professor}
            stock={d.stock}
          />
          <button value="add" onClick={() => handleDetail(d)}>
            빌리기,세부사항 뜰거임
          </button>
          {edit ? (
            <InfoCard
              data={d}
              open={open}
              close={handleClose}
              handleAdd={handleAdd}
            />
          ) : null}
          <p>남아있는 재고={d.stock}</p>
        </div>
      </div>
    );
  });
}

export default Detail;
