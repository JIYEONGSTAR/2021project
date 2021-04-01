import { connect } from "react-redux";
// import Main from "../components/Main";
import Main from "../components/Main";
function mapStateToProps(state) {
  return { data: state.data };
}
function mapDispatchToProps(dispatch) {
  return {
    handleSubject: function (sub) {
      dispatch({ type: "handleSubject", subject: sub });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
