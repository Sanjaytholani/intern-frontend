import Player from "./components/Player";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PdfViewer from "./components/PdfViewer";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <div className="flex">
            <div className="flex-7">
              <Route exact path="/video">
                <Player />
              </Route>
              <Route exact path="/pdf">
                <PdfViewer />
              </Route>
            </div>
            <div className="flex-3">
              <Sidebar />
            </div>
          </div>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
