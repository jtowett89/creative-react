import { React } from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            crea.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Class
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Class A
                  </a>
                  <a className="dropdown-item" href="#">
                    Class B
                  </a>
                  <a className="dropdown-item" href="#">
                    Class C
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Showcase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="login-btn nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ width: "100%", height: "5em" }}></div>
    </>
  );
};
export default Nav;
