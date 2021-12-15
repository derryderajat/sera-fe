import React, { useState, useEffect } from "react";
import * as Showdown from "showdown";
import "./CreatePost.css";
import MDEditor from "@uiw/react-md-editor";
const handleKeyDown = (event) => {
  event.preventDefault();
  let charCode = String.fromCharCode(event.which).toLowerCase();
  if ((event.ctrlKey || event.metaKey) && charCode === "s") {
    alert("CTRL+S Pressed");
  } else if ((event.ctrlKey || event.metaKey) && charCode === "c") {
    alert("CTRL+C Pressed");
  } else if ((event.ctrlKey || event.metaKey) && charCode === "v") {
    alert("CTRL+V Pressed");
  }
};
function CreatePost() {
  const [value, setValue] = useState(
    "**Deskripsi Pertanyaan:**\n<!-- Masukan deskripsi pertanyaan Anda dibawah baris ini -->\n**Kode:**\n<!-- Masukan kode Anda kedalam ``` yang sudah tertera dibawah. DILARANG memberikan kode dalam bentuk screenshot! Klik tombol BANTUAN PENULISAN dibawah text editor untuk panduan menulis -->\n ```\n``` "
  );
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="containerCreatePost">
      <div className="createPost">
        <MDEditor
          className="editor"
          height={500}
          width={700}
          value={value}
          onChange={setValue}
          preview={"edit"}
          onKeyUp={handleKeyDown}
        />
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
}

export default CreatePost;
