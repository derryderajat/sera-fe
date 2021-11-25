import "./App.css";
import Header from "./Header";
import LeftSideMenu from "./LeftSideMenu";
import Main from "./Main";
import RightSideMenu from "./RightSideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <LeftSideMenu />
        <Main />
        <RightSideMenu />
      </div>
    </div>
  );
}

export default App;
