import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Common.css";
import "./Navbar.css";

const Navbar = ({ isAuth }) => {
  return (
    <>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          &nbsp;Home
        </Link>
        {!isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket} />
            &nbsp;Login
          </Link>
        ) : (
          <>
            <Link to="/postArticle">
              <FontAwesomeIcon icon={faFilePen} />
              &nbsp;Post Article
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faRightFromBracket} />
              &nbsp;Logout
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
