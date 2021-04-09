import { connect } from "react-redux";
import BookList from "../components/BookList";
function mapStateToProps(state) {
  return {
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
    handleSearch: function (search) {
      dispatch({ type: "handleSearch", search: search });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
