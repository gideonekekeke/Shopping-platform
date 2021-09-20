import HeaderView from "./Components/HeaderView";
import BodyPage from "./Components/MainBody/BodyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./Components/MainBody/GlobalContext";
import UploadProducts from "./Components/MainBody/UploadProducts";
import CommentUser from "./Components/MainBody/CommentUser";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <HeaderView />
          <Switch>
            <Route exact path="/" component={BodyPage} />
            <Route path="/post" component={UploadProducts} />
            <Route path="/coment/:id" component={CommentUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
