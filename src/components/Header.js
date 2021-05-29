import React, { Component } from "react";

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
                <a href="/" className="d-block">
                  <img
                    src="images/logo/logo.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
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
                    <li className="">
                      <a href="/" className="nav-link text-left">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="nav-link text-left">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/groupdiary" className="nav-link text-left">
                      Group diary
                      </a>
                    </li>
                    <li>
                      <a href="/technical" className="nav-link text-left">
                        Technical
                      </a>
                    </li>
                    <li>
                      <a href="/result" className="nav-link text-left">
                        Result
                      </a>
                    </li>
                    <li>
                      <a href="/styleguide " className="nav-link text-left">
                        Style Guide
                      </a>
                    </li>
                    <li>
                      <a href="/project" className="nav-link text-left">
                        Project
                      </a>
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
