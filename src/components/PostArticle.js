import React, { useEffect, useState } from "react";
import "./PostArticle.css";

const PostArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const sendPostData = () => {
    console.log(title);
    console.log(content);
  };

  useEffect(() => {
    const postTitleEl = document.getElementById("postTitle");
    const postContentEl = document.getElementById("postContent");

    const handleTitleChange = (e) => {
      console.log("postTitleEl: " + e.target.value);
    };

    const handleContentChange = (e) => {
      console.log("postContentEl: " + e.target.value);
    };

    postTitleEl.addEventListener("change", handleTitleChange);

    postContentEl.addEventListener("change", handleContentChange);

    return () => {
      postTitleEl.removeEventListener("change", handleTitleChange);

      postContentEl.removeEventListener("change", handleContentChange);
    };
  }, []);

  return (
    <div className="postBlock">
      <div className="postContainer">
        <h1 className="postHead">Post an article</h1>
        <div className="postPart">
          <h2 className="postHeading">Title</h2>
          <input
            id="postTitle"
            className="postTitle"
            type="text"
            placeholder="Enter an title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="postPart">
          <p className="postHeading">Content</p>
          <textarea
            id="postContent"
            className="postContent"
            cols="30"
            rows="10"
            placeholder="Enter texts"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={sendPostData}>
          Post
        </button>
      </div>
    </div>
  );
};

export default PostArticle;
