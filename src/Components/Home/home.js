import React, { Component } from "react";
import { from } from "react-redux";
import { connect } from "react-redux";
import Search from "../Search";
import Loading from "../Loading";

import Header from "../Header";

import * as actionCreators from "../../store/actions";

import Qlist from "../Qlist";
import QForm from "../QForm";

class Home extends Component {
  componentDidMount() {
    this.props.reset();
    this.props.fetchQ();
  }
  render() {
    const { majors } = this.props;
    // this.props.fetchQ();
    const majorList = majors.map(major => major.major);
    if (this.props.loading) {
      return <Loading />;
    } else {
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
                <strong style={{ color: "#de8d72" }}>Lookup</strong> the
                solution!
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
            <div>
              <a
                value="true"
                onClick={() => this.props.filterQuestionsByApprove("true")}
              >
                <i className="fas fa-thumbs-up" />
                Approved Questions
              </a>
            </div>
            <div>
              <a
                value="false"
                onClick={() => this.props.filterQuestionsByApprove("false")}
              >
                <i className="fas fa-minus-square" />
                {"  "}Unapproved Questions
              </a>
            </div>
            <div>
              <a
                onClick={() => {
                  this.props.reset();
                  this.props.fetchQ();
                }}
              >
                <i className="fas fa-globe" />
                {"  "} All
              </a>
            </div>
            <div>
              <a
                value="true"
                onClick={() => this.props.filterQuestionsByAnswer("true")}
              >
                <i className="fas fa-comment" />
                {"  "}Answered Questions
              </a>
            </div>
            <div>
              <a
                value="false"
                onClick={() => this.props.filterQuestionsByAnswer("false")}
              >
                <i className="fas fa-comment-slash" />
                UnAnswered
              </a>
            </div>

            <div className="topnav-right" />
          </div>
          <div>
            <div className="topnav" style={{ marginTop: "20px" }}>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[0])
                  }
                >
                  {majorList[0]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[1])
                  }
                >
                  {majorList[1]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[2])
                  }
                >
                  {majorList[2]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[3])
                  }
                >
                  {majorList[3]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[4])
                  }
                >
                  {majorList[4]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[5])
                  }
                >
                  {majorList[5]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[6])
                  }
                >
                  {majorList[6]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[7])
                  }
                >
                  {majorList[7]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[8])
                  }
                >
                  {majorList[8]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[9])
                  }
                >
                  {majorList[9]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[10])
                  }
                >
                  {majorList[10]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[11])
                  }
                >
                  {majorList[11]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[12])
                  }
                >
                  {majorList[12]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[13])
                  }
                >
                  {majorList[13]}
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.filterQuestionsByMajor(majorList[14])
                  }
                >
                  {majorList[14]}
                </a>
              </div>

              <div className="topnav-right" />
            </div>
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
}

const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    majors: state.questions.majors,
    loading: state.questions.loading
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
