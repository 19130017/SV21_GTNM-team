import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div
          className="intro-section image"
          style={{ backgroundImage: 'url("images/background.jpeg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <div className="intro top">
                  <h1>Group 02</h1>
                  <p className="lecture">Lecture: Tran Thi Thanh Nga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
