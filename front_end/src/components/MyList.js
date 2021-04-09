import React from "react";
import { Link } from "react-router-dom";
import "../css/BookList.css";
import "../css/Main.css";
import DetailCard from "./cards/DetailCard";
function MyList(props) {
  const data = props.data;
  const onRemove = (e) => {
    props.handleMyList(e.bookId);
  };
  return data.map((d) => {
    return (
      <div>
        <div className="detailList">
          <div className="detailMenu">
            <DetailCard
              image={d.image}
              title={d.title}
              author={d.author}
              publisher={d.publisher}
              pubDate={d.pubdate}
              price={d.price}
              subject={d.subjects}
              className={d.className}
              professor={d.professor}
              stock={d.stock}
            />
            <Link to={`/`}>
              <button value="remove" onClick={() => onRemove(d)}>
                반납하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

export default MyList;
