import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import renderHTML from "react-render-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class Qcards extends Component {
  render() {
    const { question } = this.props;
    // console.log("status", question.answered);
    console.log("qstatus", question.approved);
    return (
      <div>
        <div className="panel-body">
          <div className="tab-content">
            <div id="tab1" className="tab-pane active">
              <div className="listing-grid">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
                    <a
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title={question.asked_by.username}
                      href="#"
                    >
                      <img
                        alt=""
                        className="img-responsive center-block"
                        src={question.asked_by.image}
                      />
                    </a>
                    <h4 className="userq">{question.asked_by.username}</h4>
                  </div>
                  <div className="col-md-9 col-sm-8  col-xs-12">
                    <h3>
                      <div className="cardn w-100">
                        <div className="card-body">
                          <Link to={`/questions/${question.id}`}>
                            <h4>{renderHTML(question.q_text)}</h4>
                            {/* <h5 className="card-title">{renderHTML(question.q_text)}</h5> */}

                            <p className="card-text" />
                          </Link>
                        </div>{" "}
                      </div>
                    </h3>
                    <div className="listing-meta">
                      {" "}
                      <span>
                        <i class="fa fa-clock-o" aria-hidden="true" />
                        {question.created_on}
                      </span>{" "}
                    </div>
                    <div className=" tagcloud">
                      <a href="">{question.major.major}</a>
                    </div>
                    <div>
                      {question.approved ? (
                        <div class="ribbon based">
                          <span>Approved </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 col-xs-12">
                    <ul className="question-statistic">
                      <li className="active">
                        {" "}
                        <a
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Answers"
                        >
                          <span>{question.answers.length}</span>
                        </a>
                      </li>
                      <span> </span>
                    </ul>
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
const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: questionID =>
      dispatch(actionCreators.deleteQuestion(questionID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Qcards);
