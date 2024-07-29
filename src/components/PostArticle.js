import React, { useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Common.css";
import "./PostArticle.css";

const PostArticle = ({ isAuth }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(50, "Must be 50 characters or less"),
      content: Yup.string()
        .required("Content is required")
        .max(1000, "Must be 1000 characters or less"),
    }),
    onSubmit: async (value) => {
      if (!auth.currentUser) {
        console.log("User is not authenticated.");
        return;
      }
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          title: value.title,
          content: value.content,
          author: {
            username: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
          createTime: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        navigate("/");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
  });

  useEffect(() => {
    console.log("isAuth in PostArticle: " + isAuth);
    if (!isAuth) {
      navigate("/");
    }
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
  }, [isAuth, navigate]);

  return (
    <div className="postArticlePage postBlock">
      <form onSubmit={formik.handleSubmit}>
        <div className="postContainer">
          <h1 className="postHead">Post an article</h1>
          <div className="postPart">
            <h2 className="postHeading">Title</h2>
            <input
              id="postTitle"
              className="postTitle"
              type="text"
              placeholder="Enter a title"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="errorMessage">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="postPart postPart--content">
            <p className="postHeading">Content</p>
            <textarea
              id="postContent"
              className="postContent"
              cols="30"
              rows="10"
              placeholder="Enter texts"
              {...formik.getFieldProps("content")}
            ></textarea>
            {formik.touched.content && formik.errors.content ? (
              <div className="errorMessage">{formik.errors.content}</div>
            ) : null}
          </div>
          <button
            className="postButton"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostArticle;
