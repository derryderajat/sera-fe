import React, { useState, useEffect } from "react";
import * as Showdown from "showdown";
import "./CreatePost.css";
import MDEditor from "@uiw/react-md-editor";
const handleKeyDown = (event) => {
  event.preventDefault();
  let charCode = String.fromCharCode(event.which).toLowerCase();
  if ((event.ctrlKey || event.metaKey) && charCode === "v") {
    alert("CTRL+V Pressed");
  }
};
function CreatePost() {
  const [urlImg, setUrlImg] = useState();

  const [value, setValue] = useState(
    "**Deskripsi Pertanyaan:**\n<!-- Masukan deskripsi pertanyaan Anda dibawah baris ini -->\n**Kode:**\n<!-- Masukan kode Anda kedalam ``` yang sudah tertera dibawah. DILARANG memberikan kode dalam bentuk screenshot! Klik tombol BANTUAN PENULISAN dibawah text editor untuk panduan menulis --> \n\n```\nprint('Hello World')\n``` "
  );
  const MAX_LENGTH = 200;
  const [title, setTitle] = useState("");
  const [lengthTitle, setLengthTitle] = useState(0);
  function handleInputTitle(e) {
    if (e.target.value.length > MAX_LENGTH) {
      setTitle(e.target.value.substring(0, MAX_LENGTH));
    } else {
      setTitle(e.target.value);
      setLengthTitle(e.target.value.length);
    }
  }

  return (
    <div className="containerCreatePost">
      <div className="postContainer">
        <h1>Post</h1>
      </div>
      <div className="titleContainer">
        <div className="titleDesc">Title</div>
        <div className="titleInputContainer">
          <input
            type={"text"}
            placeholder="please enter title (required)"
            required
            value={title}
            onChange={handleInputTitle}
          ></input>
          <span className="titleSpan">{lengthTitle}/200</span>
        </div>
      </div>
      <div className="tagsContainer">
        <div className="tagsDesc">Tag</div>
        <div className="tagsHint">
          Masukan tags yang cocok dengan pertanyaan ini. (min: 1)
        </div>
        <div className="tagsInputContainer">
          <input type={"text"}></input>
        </div>
      </div>
      <div className="createPost">
        <MDEditor
          className="editor"
          height={500}
          value={value}
          onChange={setValue}
          preview={"edit"}
          onKeyUp={handleKeyDown}
        />
        <MDEditor.Markdown source={value} />
      </div>
      <div className="controlForm">
        <div>
          <button className="buttonControl">Back</button>
        </div>
        <div>
          <button className="buttonControl">Kirim</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
