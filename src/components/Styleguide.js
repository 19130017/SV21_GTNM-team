import React, { Component } from "react";

export default class Styleguide extends Component {
  render() {
    return (
      <div>
        <div
          className="intro-section small"
          style={{ backgroundImage: 'url("images/background.jpeg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <div className="intro">
                  <h1>Style Guide</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#nav-layout"
                role="tab"
                aria-controls="nav-layout-tab"
                aria-selected="true"
              >
                Layout
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-typography"
                role="tab"
                aria-controls="nav-typography-tab"
                aria-selected="false"
              >
                Typography
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-colorpalette"
                role="tab"
                aria-controls="nav-colorpalette-tab"
                aria-selected="false"
              >
                Color palette
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-image"
                role="tab"
                aria-controls="nav-image-tab"
                aria-selected="false"
              >
                Image
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-file"
                role="tab"
                aria-controls="nav-file-tab"
                aria-selected="false"
              >
                File &amp; Directory
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-layout"
              role="tabpanel"
              aria-labelledby="nav-layout-tab"
            >
              <ul>
                <li>Header</li>
                <li>Nav</li>
                <li>Section</li>
                <li>Footer</li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="nav-colorpalette"
              role="tabpanel"
              aria-labelledby="nav-colorpalette-tab"
            >
              <ul className="list-group">
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  #FFFFFF
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#000000", color: "#fff" }}
                >
                  #000000
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#5577b4" }}
                >
                  #5577b4
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#E53637" }}
                >
                  #e53637
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  rgba(255, 255, 255, 0.2);
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="nav-typography"
              role="tabpanel"
              aria-labelledby="nav-typography-tab"
            >
              <ul>
                <li>
                  <h1
                    style={{
                      fontFamily:
                        '"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    Header 1
                  </h1>
                </li>
                <li>
                  <h4 style={{ fontFamily: '"Oswald", sans-serif' }}>
                    Header 4
                  </h4>
                </li>
                <li>
                  <span style={{ fontFamily: '"Mulish", sans-serif' }}>
                    Mulish
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
                    }}
                  >
                    Segoe UI
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="nav-image"
              role="tabpanel"
              aria-labelledby="nav-image-tab"
            >
              <ul>
                <li>
                  <h4>Web Group</h4>
                  <ul>
                    <li>
                      <span>
                        <strong>Icon:</strong>
                      </span>{" "}
                      99 x 32 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Banner:</strong>
                      </span>{" "}
                      1903 x 940 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Small Banner:</strong>
                      </span>{" "}
                      1903 x 660 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Member Image:</strong>
                      </span>{" "}
                      100 x 100 (px)
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <h4>Web Project</h4>
                  <ul>
                    <li>
                      <span>
                        <strong>Icon:</strong>
                      </span>{" "}
                      93 x 23 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Banner Animation:</strong>
                      </span>{" "}
                      1222 x 656 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Trending Movie &amp; Popular:</strong>
                      </span>{" "}
                      230 x 325 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>Top View Movie:</strong>
                      </span>{" "}
                      360 x 190 (px)
                    </li>
                    <br />
                    <li>
                      <span>
                        <strong>New Comment Movie:</strong>
                      </span>{" "}
                      90 x 130 (px)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="nav-file"
              role="tabpanel"
              aria-labelledby="nav-file-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <img src="images/file/1.png" />
                </div>
                <div className="col-md-6">
                  <img src="images/file/2.png" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <img src="images/file/3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
