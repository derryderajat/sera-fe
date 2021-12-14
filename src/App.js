import "./App.css";
import Header from "./Header";
import LeftSideMenu from "./LeftSideMenu";
import Main from "./Main";
import RightSideMenu from "./RightSideMenu";
import Topic from "./Topic";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Coba from "./Coba";
function App() {
  const [location, setLocation] = useState("/");
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__body">
          <Routes>
            <Route
              path="/"
              element={[<LeftSideMenu />, <Main />, <RightSideMenu />]}
            ></Route>

            <Route path="/createPost" element={<CreatePost />} exact></Route>
            <Route path="/coba" element={<Coba />} exact></Route>
            <Route path="/topic/:topicId" element={<Topic />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
