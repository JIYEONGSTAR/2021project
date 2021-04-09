import { connect } from "react-redux";
import Main from "../components/Main";
function mapStateToProps(state) {
  return {
    data: state.data,
    booklist: state.bookListBySubject[0],
    notice: state.noticeList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleLike: function (id) {
      dispatch({ type: "like", id: id });
    },
    handleMyList: function (id) {
      dispatch({ type: "addMyList", id: id });
    },
    handleBookDetail: function (id) {
      dispatch({ type: "bookDetail", id: id });
    },
    handleSubject: function (sub) {
      dispatch({ type: "handleSubject", subject: sub });
    },
    handleAll: function () {
      dispatch({ type: "handleAll" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
