import React from "react";
import "./Topics.css";
import data from "../../topics.json";
import { Link } from "react-router-dom";
function Topics() {
  return (
    <div className="topics-container">
      {data.topics.map((data, key) => {
        return (
          <div className="topics">
            <Link to={"topics/" + data.name}>
              <div>
                <img className="image-topics" src={data.img} loading="lazy" />
              </div>
              <div className="detail-topics">
                <div className="title-topics">{data.name}</div>
                <div className="count-topics">{data.count}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Topics;
