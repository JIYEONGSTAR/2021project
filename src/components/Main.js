import React from "react";
import BookList from "../components/BookList";
import "../css/cards/BookCard.css";

function Main(props) {
  // const []=useState(get);
  // const onLike =(e)=>{
  //     props.handleLike(e.id);
  // }
  const data = props.data;
  const handleAdd = (e) => {
    props.handleMyList(e.id);
  };
  return (
    <div className="showBook">
      <BookList className="booklist" data={data} onAdd={handleAdd} />
    </div>
  );
}

export default Main;
