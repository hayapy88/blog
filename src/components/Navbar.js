import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
      <Link to="/login">
        <FontAwesomeIcon icon={faRightToBracket} />
        &nbsp;Login
      </Link>
    </nav>
  );
};

export default Navbar;
