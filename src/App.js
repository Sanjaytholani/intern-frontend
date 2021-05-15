import Player from "./components/Player";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PdfViewer from "./components/PdfViewer";
import Slides from "./components/Slides";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <div className="flex -mt-8">
            <div className="flex-7">
              <Route exact path="/video">
                <Player />
                <h3 className="pl-28 animate-pulse font-semibold">
                  Pssst, Click the kebab menu(3 dots) icon on the bottom left to
                  download the video
                </h3>
              </Route>
              <Route exact path="/pdf">
                <PdfViewer />
              </Route>
              <Route exact path="/slides">
                <Slides />
              </Route>
            </div>
            <div className="flex-3">
              <Sidebar />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
