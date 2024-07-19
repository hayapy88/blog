import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        &nbsp;Home
      </Link>
      <Link to="/postArticle">
        <FontAwesomeIcon icon={faFilePen} />
        &nbsp;Post Article
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          &nbsp;Login
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          &nbsp;Logout
        </Link>
      )}
      ;
    </nav>
  );
};

export default Navbar;
