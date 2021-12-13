import "./App.css";
import Header from "./Header";
import LeftSideMenu from "./LeftSideMenu";
import Main from "./Main";
import RightSideMenu from "./RightSideMenu";
import Topic from "./Topic";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function App() {
  const useReactPath = () => {
    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
      const winPath = window.location.pathname;
      setPath(winPath);
    };
    useEffect(() => {
      window.addEventListener("popstate", listenToPopstate);
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
    }, []);
    return path;
  };
  const [state, setstate] = useState(null);
  useEffect(() => {
    
  }, [state]);
  console.log(state);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__body">
          <LeftSideMenu />
          <Routes>
            <Route path="/" element={<Main />} exact></Route>
            <Route path="/createPost" element={<CreatePost />} exact></Route>
            <Route path="/topic/:topicId" element={<Topic />}></Route>
          </Routes>
          <RightSideMenu />
        </div>
      </div>
    </Router>
  );
}

export default App;
