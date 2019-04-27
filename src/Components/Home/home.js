import React, { Component } from "react";
import { from } from "react-redux";
import { connect } from "react-redux";
import Search from "../Search";
import Footer from "../Footer";
import Header from "../Header";
import Qlist from "../Qlist";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              {" "}
              <Qlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(Home);
