import React from "react";
import "./Topic.css";
import { useParams } from "react-router-dom";
function Topic() {
  let params = useParams();
  return <div className="Topic">{params.topicId}</div>;
}

export default Topic;
