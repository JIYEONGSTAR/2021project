import React, { useState } from "react";
import BookCard from "./cards/BookCard";
import "../css/Main.css";
import { Link } from "react-router-dom";
import "../css/BookList.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function BookList(props) {
  const classes = useStyles();
  let data = props.data;
  let booklist = props.booklist;
  console.log("data");
  console.log(data);
  let IT = "IT융합자율학부";
  let humanities = "인문융합자율학부";
  let society = "사회융합자율학부";
  let mediacontents = "미디어콘텐츠융합자율학부";
  let culture = "교양";
  let list = data ? data : booklist;
  console.log(list);
  const handleAdd = (e) => {
    props.handleBookDetail(e.id);
  };
  const handleLike = (e) => {
    props.handleLike(e.id);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    props.handleSearch(e.target.value);
  };
  return (
    <>
      <div className="subjectList">
        <Button
          variant="contained"
          value="subject"
          onClick={() => {
            props.handleAll();
          }}
        >
          ALL
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
      {list ? (
        <>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="제목을 입력하세요"
              onChange={handleChange}
            />
          </form>
          <div className="bookWrap">
            {list.map((d) => (
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
        </>
      ) : (
        "버튼을 클릭하세요"
      )}
    </>
  );
}

export default BookList;
