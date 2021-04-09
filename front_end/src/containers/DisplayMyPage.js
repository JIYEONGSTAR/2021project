import { connect } from "react-redux";
import MyList from "../components/MyList";
function mapStateToProps(state) {
  return { data: state.myBookList, likeData: state.myLikeList };
}
function mapDispatchToProps(dispatch) {
  return {
    handleLike: function (id) {
      dispatch({ type: "like", id: id });
    },
    handleMyList: function (id) {
      dispatch({ type: "removeMyList", id: id });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
