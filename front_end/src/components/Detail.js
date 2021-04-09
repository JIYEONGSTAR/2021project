import React, { useState } from "react";

import "../css/BookList.css";
import InfoCard from "./cards/InfoCard";
import DetailCard from "./cards/DetailCard";

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
    props.handleMyList(e.bookId);
  };

  return data.map((d) => {
    return (
      <div className="detailList">
        <div className="detailMenu">
          <DetailCard
            image={d.image}
            title={d.title}
            author={d.author}
            publisher={d.publisher}
            pubDate={d.pubdate}
            price={d.price}
            subject={d.subject}
            className={d.className}
            professor={d.professor}
            stock={d.stock}
          />
          <button value="add" onClick={() => handleDetail(d)}>
            빌리기
          </button>
          {edit ? (
            <InfoCard
              data={d}
              open={open}
              close={handleClose}
              handleAdd={handleAdd}
            />
          ) : null}
        </div>
      </div>
    );
  });
}

export default Detail;
