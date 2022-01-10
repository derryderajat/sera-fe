import "./App.css";
import Header from "./components/Header/Header";
import RightSideMenu from "./components/RightSideMenu/RightSideMenu";
import CreatePost from "./components/CreatePost/CreatePost";
import Main from "./components/Main/Main";
import Topic from "./components/Topics/Topic/Topic";
// import CreatePost from "./components/CreatePost/CreatePost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import data from "./topics.json";
function App() {
  console.log(data);
  const [location, setLocation] = useState("/");
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__body">
          <Routes>
            <Route path="/">
              <Route
                index
                // element={[<LeftSideMenu />, <Main />, <RightSideMenu />]}
                element={[<Main />, <RightSideMenu />]}
              ></Route>
            </Route>

            <Route path="new" element={<CreatePost />} />
            <Route path="topics/" elemeent={<Topic />}></Route>
            {/* <Route path="/topic/:topicId" element={<Topic />}></Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
