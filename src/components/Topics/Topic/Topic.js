import React from "react";
import "./Topic.css";
import { useParams } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
function Topic() {
  let params = useParams();

  return (
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
            <Link to={`topic/1`}>
              <div className="main__postTitle">Ini Judul Post</div>
            </Link>
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
            <Link to={`topic/2`}>
              <div className="main__postTitle">Ini Judul Post</div>
            </Link>
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
            <Link to={`topic/3`}>
              <div className="main__postTitle">Ini Judul Post</div>
            </Link>
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
  );
}

export default Topic;
