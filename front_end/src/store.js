import { applyMiddleware, createStore, compose } from "redux";

import axios from "./axios/axios";
import thunk from "redux-thunk";
const getData = () => {
  const book = [];
  axios.get("book/all").then((result) => {
    result.data.forEach((item) => {
      book.push(item);
    });
  });
  return book;
};
const getNotice = () => {
  const notice = [];
  axios.get("notice/all").then((result) => {
    result.data.forEach((item) => {
      notice.push(item);
    });
  });
  return notice;
};
function reducer(state, action) {
  if (state === undefined) {
    return {
      selected_id: 1,
      selected_subject: "",
      bookListBySubject: [getData()],
      myBookList: [],
      bookDeatil: [],
      data: getData(),
      noticeList: getNotice(),
    };
  }
  let newData = [...state.data];
  let newMyBookList = [...state.myBookList];
  let newBookListBySubject = [...state.bookListBySubject];
  let newState;
  let newNoticeList = [...state.noticeList];
  let newSubject = { selected_subject: action.subject };
  let newID = { selected_id: action.id }; //현재 선택한 값
  let newBookDetail;

  let targetData = newData.find((currentData) => {
    return currentData.bookId === newID.selected_id;
  });
  let targetIndex = newMyBookList.findIndex(
    (currentData) => currentData.bookId === newID.selected_id
  );
  let existData = newMyBookList.find((currentData) => {
    return currentData.bookId === newID.selected_id;
  });
  let targetDataBySubject = newData.filter((currentData) => {
    return currentData.subjects === newSubject.selected_subject;
  });
  let targetDataBySearch = newData.filter((currentData) => {
    return currentData.title.includes(action.search);
  });

  switch (action.type) {
    case "like":
      targetData.likeNum === 0
        ? (targetData.likeNum += 1)
        : (targetData.likeNum -= 1);

      break;
    case "addMyList":
      if (targetData.stock <= 0) {
        alert("더이상 빌릴 수 없습니다");
      } else if (existData === undefined) {
        alert("대여가 완료되었습니다.");
        newMyBookList.push(targetData);
        targetData.stock -= 1;
      } else {
        alert("이미 담겨 있습니다.");
      }
      break;
    case "removeMyList":
      alert("반납하시겠습니까?");
      newMyBookList.splice(targetIndex, 1);
      targetData.stock += 1;
      break;
    case "handleSubject":
      newBookListBySubject.pop();
      newBookListBySubject.push(targetDataBySubject);
      break;
    case "handleSearch":
      newBookListBySubject.pop();
      newBookListBySubject.push(targetDataBySearch);
      break;
    case "handleAll":
      newBookListBySubject.pop();
      newBookListBySubject.push(newData);
      break;
    case "bookDetail":
      newBookDetail = [];
      newBookDetail.push(targetData);
      break;

    default:
      break;
  }
  newState = {
    ...state,
    data: newData,
    myBookList: newMyBookList,
    bookListBySubject: newBookListBySubject,
    bookDeatil: newBookDetail,
    noticeList: newNoticeList,
  };
  return newState;
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
