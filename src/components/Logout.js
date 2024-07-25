import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Common.css";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div className="pageBody">
      <p>Are you sure you want to log out?</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
