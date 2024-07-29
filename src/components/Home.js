import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { format } from "date-fns";
import "./Common.css";
import "./Home.css";

const formatTimestamp = (timestamp) => {
  const date = timestamp.toDate();
  return format(date, "dd MMMM yyyy - HH:mm");
};

const PostDate = ({ timestamp }) => {
  return (
    <p className="postCreateTime postHeading postHeading--createTime">
      {formatTimestamp(timestamp)}
    </p>
  );
};

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        console.log("currentUser: ", currentUser);
      }
    });
    return () => unsubscribe();
  }, [currentUser]);
  useEffect(() => {
    const getPostsAndUpdate = async () => {
      const postsCollection = collection(db, "posts");
      const postsQuery = query(postsCollection, orderBy("createTime", "desc"));
      const querySnapshot = await getDocs(postsQuery);
      // console.log(querySnapshot);
      // console.log(querySnapshot.docs);
      // console.log(querySnapshot.docs.map((doc) => ({ doc })));

      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("docs");
      console.log(docs);

      const updates = docs.map(async (document) => {
        if (!document.createTime) {
          const docRef = doc(db, "posts", document.id);
          await updateDoc(docRef, {
            createTime: serverTimestamp(),
          });
        }
      });
      await Promise.all(updates);

      setPostList(docs);
    };
    getPostsAndUpdate();
  }, [currentUser]);
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
            <PostDate timestamp={post.createTime} />
            <div className="postPart postPart--authorAndDelete">
              <p className="postAuthor postHeading postHeading--author">
                @{post.author.username}
              </p>
              {currentUser && currentUser.uid === post.author.id && (
                <button
                  className="deleteButton"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
