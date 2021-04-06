import { applyMiddleware, createStore } from "redux";
import _data from "./book.json";
import thunk from "redux-thunk";
function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat();
    return {
      selected_id: 1,
      selected_subject: "",
      bookListBySubject: [mockData],
      myBookList: [],
      bookDeatil: [],
      data: mockData,
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

export default createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
