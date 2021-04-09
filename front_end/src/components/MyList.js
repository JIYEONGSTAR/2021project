import React from "react";
import BookCard from "./cards/BookCard";
import { Link } from "react-router-dom";
function MyList(props) {
  const data = props.data;

  const onRemove = (e) => {
    props.handleMyList(e.id);
  };
  return data.map((d) => {
    return (
      <div>
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
        <Link to={`/`}>
          <button value="remove" onClick={() => onRemove(d)}>
            반납하기
          </button>
        </Link>
      </div>
    );
  });
}

export default MyList;
