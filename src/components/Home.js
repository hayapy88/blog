import React from "react";
import "./Home.css";

const Home = () => {
  const deletePostData = () => {
    console.log("Clicked Delete button");
  };
  return (
    <div className="postBlock">
      <div className="postContainer postContainer--home">
        <div className="postPart">
          <h2 className="postHeading postHeading--title">
            This is a Title This is a Title This is a Title
          </h2>
        </div>
        <div className="postPart">
          <p className="postHeading">
            This is a content texts. This is a content texts. This is a content
            texts. This is a content texts. This is a content texts.
          </p>
        </div>
        <div className="postPart">
          <p className="postHeading postHeading--author">@Author name</p>
        </div>
        <div className="postPart">
          <button className="deleteButton" onClick={deletePostData}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
