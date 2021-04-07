import { connect } from "react-redux";
import Notice from "../components/Notice";
function mapStateToProps(state) {
  return {
    notice: state.noticeList,
  };
}

export default connect(mapStateToProps)(Notice);
