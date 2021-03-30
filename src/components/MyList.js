import React from "react";
import BookCard from "./cards/BookCard";

function MyList(props) {
  const data = props.data;
  console.log(data);

  return data.map((d) => {
    return (
      <div>
        <BookCard
          image={d.image}
          title={d.title}
          professor={d.professor}
          className={d.className}
        />
      </div>
    );
  });
}

export default MyList;
