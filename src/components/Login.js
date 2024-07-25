import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Common.css";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/cancelled-popup-request") {
          console.log("Popup request was cancelled");
        } else {
          console.log("Error signing in with popup: ", error);
        }
      });
  };
  return (
    <div className="pageBody">
      <p>Let's login and get started!</p>
      <button type="button" onClick={loginWithGoogle}>
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
