import React from "react";
import "./RightSideMenu.css";
import CampaignIcon from '@mui/icons-material/Campaign';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function RightSideMenu() {

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      appendDots: dots => (
        <div
          style={{  
            padding: "30px",
            display: "flex"
          }}
        >
          <ul style={{ margin: "0px" ,color: "blue"}}> {dots} </ul>
        </div>
      )
    };
  return (
    <div className="rightSide">
      <div className="rightSide__body__upper">
      <Slider {...settings}>
          <div >
            <img src="https://cdn.discordapp.com/attachments/697296070450872331/919584068700606484/unknown.png" alt="1" />
          </div>
          <div >
            <img src="https://cdn.discordapp.com/attachments/697296070450872331/919583418931630110/IMG_20211212_203548.jpg" alt="2" />
          </div >
          <div >
            <img src="https://cdn.discordapp.com/attachments/697296070450872331/919590078194528296/unknown.png" alt="3" />
          </div>
        </Slider>
        </div>
      <div className="rightSide__body__middle">
      <div className="rightSide__Tittle"><h3>Official Information</h3></div>
        <div className="rightSide__icon__middle">
      <div className="rightSide__Text"><CampaignIcon /> halo <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> apa kabar <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> baik kah <br /></div>
      </div>
        </div>
      <div className="rightSide__body__bottom">
      <div className="rightSide__Tittle"><h3>Hot Topics</h3></div>
      <div className="rightSide__Text"><CampaignIcon /> #java <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> #php <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> #c++ <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> #html <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> #python <br /></div>
      <div className="rightSide__Text"><CampaignIcon /> #kotlin <br /></div>
        </div>

          </div>
 
  );
}
export default RightSideMenu;

