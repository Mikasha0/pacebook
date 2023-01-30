import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import "./Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();

  const { authState, setAuthState } = useContext(AppContext);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });

    navigate("/login");
  };
  useEffect(() => {
    const navEl = document.querySelector(".navbar");
    const navCol = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 65) {
        navEl.classList.add("navbar-scrolled");
        for (let i = 0; i < navCol.length; i++) {
          navCol[i].classList.add("nav-color");
        }
      } else if (window.scrollY < 65) {
        navEl.classList.remove("navbar-scrolled");
        for (let i = 0; i < navCol.length; i++) {
          navCol[i].classList.remove("nav-color");
        }
      }
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top navbar-scrolled">
        <div className="container-md p-2">
          <Link to="/login" className="navbar-brand" style={{ color: "blue" }}>
            pacebook
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {!authState.status ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link active">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/users" className="nav-link active">
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/createPost" className="nav-link active">
                      Create-Post
                    </Link>
                  </li>
                  <button className="btn btn-light" onClick={logOut}>
                    Logout
                  </button>
                  <form className="form-inline my-2 my-lg-0">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-rounded mx-2"
                      data-mdb-ripple-color="dark"
                    >
                      {authState.username}
                    </button>
                  </form>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
