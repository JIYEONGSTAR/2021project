import { connect } from "react-redux";
import Detail from "../components/Detail";
function mapStateToProps(state) {
  return { data: state.bookDeatil };
}
function mapDispatchToProps(dispatch) {
  return {
    handleLike: function (id) {
      dispatch({ type: "like", id: id });
    },
    handleMyList: function (id) {
      dispatch({ type: "addMyList", id: id });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
