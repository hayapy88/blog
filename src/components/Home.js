import React, { useEffect, useState } from "react";
import "./Home.css";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const handleDeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    setPostList(postList.filter((post) => post.id !== id));
  };
  return (
    <div className="homePage postBlock">
      {postList.map((post) => {
        return (
          <div className="postContainer postContainer--home" key={post.id}>
            <div className="postPart">
              <h2 className="postTitle postHeading postHeading--title">
                {post.title}
              </h2>
            </div>
            <div className="postPart">
              <p className="postContent postHeading">{post.content}</p>
            </div>
            <div className="postPart postPart--authorAndDelete">
              <p className="postAuthor postHeading postHeading--author">
                @{post.author.username}
              </p>
              <button
                className="deleteButton"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
