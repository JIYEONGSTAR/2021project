import { applyMiddleware, createStore, compose } from "redux";
import _data from "./book.json";
import axios from "../src/axios/axios";
import thunk from "redux-thunk";
const getData = () => {
  const book = [];
  axios.get("book/all").then((result) => {
    result.data.forEach((item) => {
      book.push(item);
    });
  });
};
function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat();
    return {
      selected_id: 1,
      selected_subject: "",
      bookListBySubject: [mockData],
      myBookList: [],
      bookDeatil: [],
      data: getData(),
    };
  }
  let newData = [...state.data];
  let newMyBookList = [...state.myBookList];
  let newBookListBySubject = [...state.bookListBySubject];
  let newState;
  let newSubject = { selected_subject: action.subject };
  let newID = { selected_id: action.id }; //현재 선택한 값
  let newBookDetail;
  let targetData = newData.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  let targetIndex = newMyBookList.findIndex(
    (currentData) => currentData.id === newID.selected_id
  );
  let existData = newMyBookList.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  let targetDataBySubject = newData.filter((currentData) => {
    return currentData.subject === newSubject.selected_subject;
  });
  switch (action.type) {
    case "like":
      targetData.like += 1;
      break;
    case "addMyList":
      if (targetData.stock <= 0) {
        alert("더이상 빌릴 수 없습니다");
      } else if (existData === undefined) {
        newMyBookList.push(targetData);
        targetData.stock -= 1;
      } else {
        alert("이미 담겨 잇습니다.");
      }
      // newMyBookList.push(targetData);
      break;
    case "removeMyList":
      newMyBookList.splice(targetIndex, 1);
      targetData.stock += 1;
      break;
    case "handleSubject":
      newBookListBySubject.pop();
      newBookListBySubject.push(targetDataBySubject);
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
  };
  return newState;
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
