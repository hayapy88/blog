import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostArticle from "./components/PostArticle";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") ? true : false
  );
  useEffect(() => {
    const authLocalStorage = localStorage.getItem("isAuth") ? true : false;
    console.log("authLocalStorage: " + authLocalStorage);
    setIsAuth(authLocalStorage);
  }, []);
  return (
    <Router basename="/blog">
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route
          path="/postArticle"
          element={<PostArticle isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
