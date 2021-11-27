import React from "react";
import "./LeftSideMenu.css";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function LeftSideMenu() {
  return (
    <div className="leftSide">
      <div className="leftSide__body">
        <div className="leftSide__options active">
          <div className="leftSide__option">
            <HomeIcon />
            <h3>Home</h3>
          </div>
        </div>
        <div className="br"></div>
        <div className="leftSide__options">
          <div className="leftSide__option">
            <KeyboardArrowDownIcon />
            <h3>Category</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideMenu;
