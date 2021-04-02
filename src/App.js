import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/utils/Navigation";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Notice from "./pages/Notice";
// import Main from "./components/Main";
import NotFound from "./pages/NotFound";
import ListBySubject from "./pages/ListBySubject";
import BookDetail from "./pages/BookDetail";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/setting" component={Setting} />
          <Route path="/notice" component={Notice} />
          <Route path="/booklist/:subject" component={ListBySubject} />
          <Route path="/bookdetail/:book" component={BookDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
