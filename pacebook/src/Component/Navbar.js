import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function Navbar() {
  let navigate = useNavigate();

  const { authState, setAuthState } = useContext(AppContext);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });

    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link to="/login" className="navbar-brand">
            Navbar
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
