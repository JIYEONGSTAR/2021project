import { createStore } from "redux";
import _data from "./book.json";

function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat();
    return {
      selected_id: 1,
      myBookList: [],
      data: mockData,
    };
  }
  let newData = [...state.data];
  let newMyBookList = [...state.myBookList];
  let newState;
  let newID = { selected_id: action.id }; //현재 선택한 값
  let targetData = newData.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  let targetIndex = newData.findIndex(
    (currentData) => currentData.id === newID.selected_id
  );
  let existData = newMyBookList.find((currentData) => {
    return currentData.id === newID.selected_id;
  });
  switch (action.type) {
    case "liie":
      targetData.like += 1;
      break;
    case "addMyList":
      // newMyBookList.push(targetData);
      // targetData.stock -= 1;
      // if (existData === undefined) {
      //   newMyBookList.push(targetData);
      //   targetData.stock -= 1;
      // } else {
      //   alert("이미 담겨 있습니다.");
      // }
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
    case "popStock":
      targetData.stock -= 1;
      break;
    default:
      break;
  }
  newState = { ...state, data: newData, myBookList: newMyBookList };
  return newState;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
