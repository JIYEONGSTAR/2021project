import { connect } from "react-redux";
import BookList from "../components/BookList";
function mapStateToProps(state) {
  // return { data: state.bookListBySubject };
  return { data: state.data, booklist: state.bookListBySubject[0] };
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
