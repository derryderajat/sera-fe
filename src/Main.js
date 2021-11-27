import React from "react";
import "./Main.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
function Main() {
  return (
    <div className="main">
      <div className="main__createPost">
        <div className="main__postsTitle">Post now~</div>
        <div className="main__postsButton">
          <DriveFileRenameOutlineIcon />
          Posts
        </div>
      </div>
      <div className="main__categoryContainer">
        <span className="main__categoryTitle">Home</span>
        <div className="main__categories">
          <div className="main__category active__category">Baru</div>
          <div className="main__category">Belum Dijawab</div>
        </div>
      </div>
      <div className="main__posts">
        <div className="main__postContainer">
          <div className="main__postHeader">
            <div className="main__postStatus">
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Suka</div>
              </div>
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Jawaban</div>
              </div>
            </div>
            <div className="main__postBody">
              <div className="main__postTitle">Ini Judul Post</div>
              <div className="main__postContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </div>
              <div className="main__postCategory">#AI</div>
            </div>
          </div>
          <div className="main__postFooter">
            <div className="footer__seen">
              <VisibilityIcon />
              <span className="seen__detail">5</span>
            </div>
            <div className="footer__sender">
              <div className="footer__activity">
                Aktifitas terakhir sejam yang lalu
              </div>
              <div className="sender">
                <div className="sender__name">Asep Komarudin</div>
                <div className="sender__photo">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__postContainer">
          <div className="main__postHeader">
            <div className="main__postStatus">
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Suka</div>
              </div>
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Jawaban</div>
              </div>
            </div>
            <div className="main__postBody">
              <div className="main__postTitle">Ini Judul Post</div>
              <div className="main__postContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </div>
              <div className="main__postCategory">#AI</div>
            </div>
          </div>
          <div className="main__postFooter">
            <div className="footer__seen">
              <VisibilityIcon />
              <span className="seen__detail">5</span>
            </div>
            <div className="footer__sender">
              <div className="footer__activity">
                Aktifitas terakhir sejam yang lalu
              </div>
              <div className="sender">
                <div className="sender__name">Asep Komarudin</div>
                <div className="sender__photo">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__postContainer">
          <div className="main__postHeader">
            <div className="main__postStatus">
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Suka</div>
              </div>
              <div className="postStatusContainer">
                <div className="postStatus__number">0</div>
                <div className="postStatus__detail">Jawaban</div>
              </div>
            </div>
            <div className="main__postBody">
              <div className="main__postTitle">Ini Judul Post</div>
              <div className="main__postContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </div>
              <div className="main__postCategory">#AI</div>
            </div>
          </div>
          <div className="main__postFooter">
            <div className="footer__seen">
              <VisibilityIcon />
              <span className="seen__detail">5</span>
            </div>
            <div className="footer__sender">
              <div className="footer__activity">
                Aktifitas terakhir sejam yang lalu
              </div>
              <div className="sender">
                <div className="sender__name">Asep Komarudin</div>
                <div className="sender__photo">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
