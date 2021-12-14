import React from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <Link to="/">
          <div className="header__logo">SeraLab</div>
        </Link>
        <div className="header__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="cari postingan atau user" />
        </div>
        <div className="header__menus">
          <Link to="/coba">
            <IconButton className="icon__hover">
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </Link>
          <IconButton className="icon__hover">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton className="icon__hover">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
