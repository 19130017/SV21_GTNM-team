import React, { Component } from "react";

export default class Design extends Component {
  render() {
    return (
      <div>
        <div id="accordianId" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="section1HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section1ContentId"
                  aria-expanded="true"
                  aria-controls="section1ContentId"
                >
                  1. Chức năng đăng nhập
                </a>
              </h5>
            </div>
            <div
              id="section1ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section1HeaderId"
            >
              {/* content */}
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/design-pro/Login.png"
                      height="625px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/design-pro/Login.png"
                          download="hci21g2-login-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 ">
                    <h3 className="text-center">2. Design on html </h3>
                    <img
                      src="images/design-pro/Login1.png"
                      alt=""
                      height="625px"
                      width="500px"
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/design-pro/Login1.png"
                          download="hci21g2-login-html"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section2HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section2ContentId"
                  aria-expanded="true"
                  aria-controls="section2ContentId"
                >
                  2. Chức năng đăng kí
                </a>
              </h5>
            </div>
            <div
              id="section2ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section2HeaderId"
            >
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/design-pro/SignUp.png"
                      height="625px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/design-pro/SignUp.png"
                          download="hci21g2-signup-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 mb-2 ">
                    <h3 className="text-center">1. Design on html </h3>
                    <img
                      src="images/design-pro/SignUp2.png"
                      height="625px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/design-pro/SignUp2.png"
                          download="hci21g2-signup-html"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section1HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section3ContentId"
                  aria-expanded="true"
                  aria-controls="section3ContentId"
                >
                  3. Chức năng quên mật khẩu
                </a>
              </h5>
            </div>
            <div
              id="section3ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section1HeaderId"
            >
              {/* content */}
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/design-pro/ForgotPassword.png"
                      height="625px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/design-pro/ForgotPassword.png"
                          download="hci21g2-forgotpass-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 ">
                    <h3 className="text-center">2. Design on html </h3>
                    <img
                      src="images/design-pro/ForgotPassword1.png"
                      height="625px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/design-pro/ForgotPassword1.png"
                          download="hci21g2-forgot-html"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section2HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section4ContentId"
                  aria-expanded="true"
                  aria-controls="section4ContentId"
                >
                  4. Chức năng comment
                </a>
              </h5>
            </div>
            <div
              id="section4ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section2HeaderId"
            >
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/design-pro/Comment.png"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/design-pro/Comment.png"
                          download="hci21g2-cmt-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 mb-2 ">
                    <h3 className="text-center">1. Design on html </h3>
                    <img
                      src="images/design-pro/Comment1.png"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/design-pro/Comment1.png"
                          download="hci21g2-cmt-html"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section1HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section5ContentId"
                  aria-expanded="true"
                  aria-controls="section5ContentId"
                >
                  5. Chức năng blog comment
                </a>
              </h5>
            </div>
            <div
              id="section5ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section1HeaderId"
            >
              {/* content */}
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/design-pro/BlogComment.png"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/l1-1.jpg"
                          download="hci21g2-blogcmt-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 ">
                    <h3 className="text-center">2. Design on html </h3>
                    <img
                      src="images/design-pro/BlogComment1.png"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/design-pro/BlogComment1.png"
                          download="hci21g2-blogcmt-html"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section2HeaderId">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#section6ContentId"
                  aria-expanded="true"
                  aria-controls="section6ContentId"
                >
                  6. Chức năng liên hệ
                </a>
              </h5>
            </div>
            <div
              id="section6ContentId"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section2HeaderId"
            >
              <div className="card-body">
                <div className="row p-3">
                  <div className="col ml-3">
                    <h3 className="text-center">1. Design on papper</h3>
                    <img
                      src="images/l1-1.jpg"
                      height="400px"
                      width="100%"
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/l1-1.jpg"
                          download="19130017-l1-1-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-3 mb-2 ">
                    <h3 className="text-center">1. Design on html </h3>
                    <img
                      src="images/l1-2.jpg"
                      alt=""
                      height="400px"
                      width="100%"
                    />
                    <div className="text-center mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/l1-2.jpg"
                          download="19130017-l1-2-papper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
