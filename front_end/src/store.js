import { applyMiddleware, createStore, compose } from "redux";
import _data from "./book.json";
import _notice from "./notice.json";
import axios from "./axios/axios";
import thunk from "redux-thunk";

function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat();
    let notice = _notice.concat();
    return {
      selected_id: 1,
      selected_subject: "",
      bookListBySubject: [mockData],
      myBookList: [],
      bookDeatil: [],
      data: mockData,
      noticeList: notice,
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
        alert("이미 담겨 잇습니다.");
      }
      break;
    case "removeMyList":
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
