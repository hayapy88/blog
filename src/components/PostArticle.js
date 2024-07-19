import React from "react";
import "./PostArticle.css";

const PostArticle = () => {
  return (
    <div className="postBlock">
      <div className="postContainer">
        <h1 className="postHead">Post an article</h1>
        <div className="postPart">
          <h2 className="postHeading">Title</h2>
          <input
            className="postTitle"
            type="text"
            placeholder="Enter an title"
          />
        </div>
        <div className="postPart">
          <p className="postHeading">Content</p>
          <textarea
            className="postContent"
            cols="30"
            rows="10"
            placeholder="Enter texts"
          ></textarea>
        </div>
        <button className="postButton">Post</button>
      </div>
    </div>
  );
};

export default PostArticle;
