import React, { Component } from "react";
import About from "../components/About";
import Slider from "../components/Slider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Groupdiary from "../components/Groupdiary";
import Technical from "../components/Technical";
import Result from "../components/Result";
import Styleguide from "../components/Styleguide";
import Project from "../components/Project";
import Header from "../components/Header";

export default class RouterURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div>
            <Route exact path="/" component={Slider} />
            <Route exact path="/about" component={About} />
            <Route exact path="/groupdiary" component={Groupdiary} />
            <Route exact path="/technical" component={Technical} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/styleguide" component={Styleguide} />
            <Route exact path="/project" component={Project} />
          </div>
        </Router>
      </div>
    );
  }
}
