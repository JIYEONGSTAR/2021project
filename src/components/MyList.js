import React from "react";
import BookCard from "./cards/BookCard";
import { Link } from "react-router-dom";
function MyList(props) {
  const data = props.data;
  console.log(data);
  const onRemove = (e) => {
    props.handleMyList(e.id);
  };
  return data.map((d) => {
    return (
      <div>
        <BookCard
          image={d.image}
          title={d.title}
          professor={d.professor}
          className={d.className}
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
