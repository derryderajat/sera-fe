import React from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
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
<<<<<<< HEAD:src/components/Header/Header.js
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
=======
          <Link to="login">
          <div className="icon_hover">Sign In</div>
          </Link>     
          <Link to="register">
          <div className="icon__hover">Sign Up</div>   
           </Link>   
>>>>>>> 8e8e18f1eca9ed4c3da7d574fc26017b0c269a51:src/Header.js
        </div>
      </div>
    </div>
  );
}

export default Header;
