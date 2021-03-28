import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./utils/Navigation";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/setting" exact component={Setting} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
