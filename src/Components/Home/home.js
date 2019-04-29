import React, { Component } from "react";
import { from } from "react-redux";
import { connect } from "react-redux";
import Search from "../Search";

import Header from "../Header";

import * as actionCreators from "../../store/actions";

import Qlist from "../Qlist";

class Home extends Component {
  render() {
    const { majors } = this.props;
    const majorList = majors.map(major => major.major);
    return (
      <div>

        <div
          className="jumbotron jumbotron-fluid"
          style={{ borderRadius: "15px", border: "1px solid #f1f1f1" }}
        >
          <div className="container">
            <h6 className="display-4" />
            <h9 className="display-4">HAVE A QUESTION ?</h9>
            <h3 className="display-4">
              Facing a difficult problem?{" "}
              <strong style={{ color: "#de8d72" }}>Lookup</strong> the solution!
            </h3>
            <br />
            <br />
            <br />
            <div className="row justify-content-md-center" />
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                  <input
                    className="search_input"
                    type="text"
                    name=""
                    placeholder="Search..."
                    onChange={event => {
                      this.props.filterQuestions(event.target.value);
                    }}
                  />
                  <a href="#" className="search_icon">
                    <i class="fas fa-search" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="topnav" style={{ marginTop: "-30px" }}>
          <a onClick={event => this.props.filterQuestionsByApprove("true")}>
            <i className="fas fa-thumbs-up" />
            Approved Questions
          </a>
          <a onClick={event => this.props.filterQuestionsByApprove("false")}>
            <i className="fas fa-minus-square" />
            {"  "}Unapproved Questions
          </a>
          <a onClick={event => this.props.fetchQ(event.target.value)}>
            <i className="fas fa-globe" />
            {"  "} All
          </a>
          <a onClick={event => this.props.filterQuestionsByAnswer("true")}>
            <i className="fas fa-comment" />
            {"  "}Answered Questions
          </a>
          <a onClick={event => this.props.filterQuestionsByAnswer("false")}>
            <i className="fas fa-comment-slash" />
            UnAnswered
          </a>

          <div className="topnav-right" />
        </div>
        <div className="listing-gridd" />

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

const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    majors: state.questions.majors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterQuestions: query => dispatch(actionCreators.filterQuestions(query)),
    filterQuestionsByMajor: major =>
      dispatch(actionCreators.filterQuestionsByMajor(major)),
    filterQuestionsByAnswer: status =>
      dispatch(actionCreators.filterQuestionsByAnswer(status)),
    filterQuestionsByApprove: status =>
      dispatch(actionCreators.filterQuestionsByApprove(status)),
    fetchQ: () => dispatch(actionCreators.fetchQ()),
    reset: () => dispatch({ type: "RESET" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
