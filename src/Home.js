import "./App.css";
import Header2 from "./Header2";
import LeftSideMenu from "./LeftSideMenu";
import Main from "./Main";
import RightSideMenu from "./RightSideMenu";
import Topic from "./Topic";
import CreatePost from "./CreatePost";
import Profile from "./Profile";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [location, setLocation] = useState("/");
  return (
    <Router>
      <div className="App">
        <Header2 />
        <div className="App__body">
          <Routes>
            <Route
              path="/"
              element={[<LeftSideMenu />, <Main />, <RightSideMenu />]}
            ></Route>

            <Route path="/createPost" element={<CreatePost />} exact></Route>
            <Route path="/topic/:topicId" element={<Topic />}></Route>
            <Route path="/profile" element={<Profile />} exact></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
