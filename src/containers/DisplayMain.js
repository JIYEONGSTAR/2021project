import { connect } from "react-redux";
import Main from "../components/Main";
function mapStateToProps(state) {
  return { data: state.data };
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
