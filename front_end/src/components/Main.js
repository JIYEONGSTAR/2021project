import React from "react";
import BookCard from "./cards/BookCard";
import "../css/Main.css";
import { Link } from "react-router-dom";
import "../css/BookList.css";
import { Button } from "@material-ui/core";

function Main(props) {
  let data = props.data;
  let booklist = props.booklist;
  console.log("data");
  console.log(data);
  const handleAdd = (e) => {
    props.handleBookDetail(e.id);
  };

  let IT = "IT융합자율학부";
  let humanities = "인문융합자율학부";
  let society = "사회융합자율학부";
  let mediacontents = "미디어콘텐츠융합자율학부";
  let culture = "교양";

  const handleLike = (e) => {
    props.handleLike(e.id);
  };
  console.log(data);
  return (
    <>
      <div className="banner">
        <img src="/bannerImg.png" alt="" />
      </div>
      <div className="subjectList">
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleAll();
          }}
        >
          ALL <i class="far fa-thumbs-up"></i>
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(humanities);
          }}
        >
          인문
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(society);
          }}
        >
          사회
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(mediacontents);
          }}
        >
          미콘
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(IT);
          }}
        >
          IT
        </Button>
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleSubject(culture);
          }}
        >
          교양
        </Button>
      </div>
      {booklist ? (
        <div className="bookWrap">
          {booklist.map((d) => (
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
                <button className="buttonHide" onClick={() => handleLike(d)}>
                  {d.like === 0 ? (
                    <i class="far fa-thumbs-up"></i>
                  ) : (
                    <i class="fas fa-thumbs-up"></i>
                  )}
                </button>

                <Link to={`/bookdetail/${d.id}`}>
                  <button value="add" onClick={() => handleAdd(d)}>
                    자세히
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "버튼을 클릭하세요"
      )}
    </>
  );
}

export default Main;
