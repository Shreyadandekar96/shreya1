import React from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import mountain from "../assets/mountain.png";

export const Navbar = () => {
  const location = useLocation();
  const isHeroPage = ["/", "/blog"].includes(location.pathname.toLowerCase());
  const navbarClass = isHeroPage ? "overlay-navbar" : "normal-navbar";
  return (
    // <nav
    // className={`navbar navbar-expand-lg ${isHeroPage ? "overlay-navbar" : "normal-navbar"}`}
    <nav className={"navbar navbar-expand-lg " + navbarClass}>
      <div className="container-fluid">
        {/* BRAND */}
        <NavLink to="/" className="navbar-brand brand-img">
          <img src={mountain} alt="logo" className="navbar-mountain" />
          <span className="brand-text">VIHARA</span>
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav center-menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/offer">
                Offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a> */}

              <button
  className="nav-link dropdown-toggle btn btn-link"
  data-bs-toggle="dropdown"
  type="button"
>
  Dropdown
</button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/action">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/anotheraction">
                    Another Action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/something">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
