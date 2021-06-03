import React, { Component } from "react";
import Design from "./Design";
import Requirement from "./Requirement";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <section className="mr-5 ml-5 mt-5 tabs-section">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-lab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Requirement
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-design-lab"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
              >
                Design
              </a>
              {/* <a
                className="nav-item nav-link actice"
                id="nav-implement-tab"
                data-toggle="tab"
                href="#nav-implement-lab"
                role="tab"
                aria-controls="nav-implement"
                aria-selected="false"
              >
                Implement
              </a> */}
            </div>
          </nav>

          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-lab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Requirement />
            </div>
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <Design />
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <a
                class="btn btn-primary btn-project"
                href="https://quanlyanimehci21g2.tk"
                role="button"
              >
                Go to project
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
