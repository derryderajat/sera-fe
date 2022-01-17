import React from "react";
import "./Profile.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Profile() {
  return (
    <div className="Form">
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
    <div className="Account">
      <div className="Account__info">
    <ArrowBackIcon/>
      <span className="Account__Info">Home</span>   
      </div>
      <div className="Account__banner">
      <div className="Account__photo__banner">
     <div className="Account__photo">
     <Avatar />
     <div className="Account_add">
     <AddCircleOutlineIcon />
     </div>
     <span>abrar</span><br/>
     <span>biodata</span>
     <br/>
     <br/>
     <div className="info">
     <div className="jarak">
       50<br/>post
     </div>
     <div className="jarak">
       50<br/>Folowwing
     </div>
     <div className="jarak">
       50<br/>Followers
     </div>
     <div className="jarak">
       50<br/>Upvote
     </div>
     </div>
     </div>
     </div>
      </div>
      <div className="Account__filter">
        <div className="info">
          <div className="jarak">post</div>
          <div className="jarak">Comments</div>
         <div className="jarak">Favorites</div>
        </div>
        </div>      
      <div className="Account__komen">  
      <div className="profile">
      <div className="user">
      <Avatar />
      <div className="user">
      abrar<br/>1 Day Ago
      </div>
      </div>
      </div>  
      <div className="title">
      <span>Proklamasi</span><br/>
     <span>17 agustus 1945</span>
      </div>
      <div className="react">
      <div className="reaction">
      <VisibilityIcon />12k
        </div> 
        <div className="reaction">
      <CommentIcon />6k
        </div> 
        <div className="reaction">
      <ThumbUpIcon />1k
        </div> 
        </div>
        </div>    
    </div>
    <div className="rightSide__body">
          <div className="rightSide__Tittle">
            <h3>Official Information</h3>
          </div>
          <div className="rightSide__icon">
            <div className="rightSide__Text">
              <CampaignIcon /> halo <br />
            </div>
            <div className="rightSide__Text">
              <CampaignIcon /> apa kabar <br />
            </div>
            <div className="rightSide__Text">
              <CampaignIcon /> baik kah <br />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
