import React, { Component } from "react";
import { from } from "react-redux";
import { connect } from "react-redux";
import Search from "../Search";
import Footer from "../Footer";
import Header from "../Header";

import * as actionCreators from "../../store/actions";

import Qlist from "../Qlist";


class Home extends Component {
  render() {
    return (
      <div>

        <div
          class="jumbotron jumbotron-fluid"
          style={{ borderRadius: "15px", border: "1px solid #f1f1f1" }}
        >
          <div class="container">
            <h6 class="display-4" />
            <h9 class="display-4">HAVE A QUESTION ?</h9>
            <br />
            <br />
            <br />
            <div className="row justify-content-md-center">
              {/* <div className="col-12">
                <div
                  class="form-group has-search"
                  style={{ paddingLeft: "25%" }}
                >
                  <span class="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div> */}
            </div>
            <div class="container h-100">
              <div class="d-flex justify-content-center h-100">
                <div class="searchbar">
                  <input
                    class="search_input"
                    type="text"
                    name=""
                    placeholder="Search..."
                  />
                  <a href="#" class="search_icon">
                    <i class="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="topnav" style={{ marginTop: "-30px" }}>
          {/* <!-- Left-aligned links (default) --> */}
          <a>
            <i class="fas fa-thumbs-up" />
            {"  "}
            Approved Questions
          </a>
          <a>
            <i class="fas fa-minus-square" />
            {"  "}Unapproved Questions
          </a>
          <a>
            <i class="fas fa-globe" />
            {"  "} ALL
          </a>
          <a>
            <i class="fas fa-comment" />
            {"  "}Answered Questions
          </a>
          <a>
            <i class="fas fa-comment-slash" />
            UnAnswered
          </a>

          {/* <!-- Right-aligned links --> */}
          <div class="topnav-right" />
        </div>
        <div className="listing-grid" />

        {/* <h5 class="card-title">Card title</h5> */}
        {/* search bar  */}
        {/* </div> */}
        <div className="container my-11">
          {/* cards  */}

          {/* <!-- Content section --> */}
          <section className="py-5" />
        </div>

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
