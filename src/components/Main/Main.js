import React from "react";
import "./Main.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Topics from "../Topics/Topics";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="main__createPost">
        <div className="main__postsTitle">Post now~</div>
        <Link to="new">
          <div className="main__postsButton">
            <DriveFileRenameOutlineIcon />
            Posts
          </div>
        </Link>
      </div>
      {/* <div className="main__categoryContainer">
        <span className="main__categoryTitle">Home</span>
        <div className="main__categories">
          <div className="main__category active__category">Baru</div>
          <div className="main__category">Belum Dijawab</div>
        </div>
      </div> */}

      <Topics />
    </div>
  );
}

export default Main;
