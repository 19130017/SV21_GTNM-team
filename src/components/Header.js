import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src="images/logo/logo.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right nav_left"
                  role="navigation"
                >
                  <ul
                    className="
            site-menu
            main-menu
            js-clone-nav
            mr-auto
            d-none d-lg-block
          "
                  >
                    <li>
                      <a href="/" className="nav-link text-left">
                        Home
                      </a>
                    </li>
                    <li>
                      <NavLink to="/about" className="nav-link text-left">
                        About
                      </NavLink>
                      {/* <a href="/about" className="nav-link text-left">
                        About
                      </a> */}
                    </li>
                    <li>
                      <NavLink to="/groupdiary" className="nav-link text-left">
                        Group diary
                      </NavLink>
                      {/* <a href="/groupdiary" className="nav-link text-left">
                        Group diary
                      </a> */}
                    </li>
                    <li>
                      <NavLink to="/technical" className="nav-link text-left">
                        Technical
                      </NavLink>
                      {/* <a href="/technical" className="nav-link text-left">
                        Technical
                      </a> */}
                    </li>
                    <li>
                      <NavLink to="/result" className="nav-link text-left">
                        Result
                      </NavLink>
                      {/* <a href="/result" className="nav-link text-left">
                        Result
                      </a> */}
                    </li>
                    <li>
                      <NavLink to="/styleguide" className="nav-link text-left">
                        Style Guide
                      </NavLink>
                      {/* <a href="/styleguide " className="nav-link text-left">
                        
                      </a> */}
                    </li>
                    <li>
                      <NavLink to="/project" className="nav-link text-left">
                        Project
                      </NavLink>
                      {/* <a href="/project" className="nav-link text-left">
                        Project
                      </a> */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
