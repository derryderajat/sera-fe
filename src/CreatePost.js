import React from "react";
import { useLocation } from "react-router-dom";
function CreatePost({ childToParent }) {
  const location = useLocation();
  window.addEventListener("locationchange", function () {
    console.log("location changed!");
  });
  childToParent = location.pathname;
  console.log("Createpost", location.pathname);
  return <div>Create Post</div>;
}

export default CreatePost;
