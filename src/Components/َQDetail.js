import React, { Component } from "react";
import QAnswers from "./QAnswers";
import AnswerForm from "./AnswerForm";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import renderHTML from "react-render-html";

class QDetail extends Component {
  state = {
    boolean: false,
    counter: this.props.counter
  };

  async componentDidMount() {
    if (this.props.user) {
      this.props.fetchProfileDetail(this.props.user.user_id);
    }
    console.log("from componentdidmount: ", this.props.match.params.questionID);
    await this.props.fetchQDetail(this.props.match.params.questionID);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.counter !== this.props.counter) {
      this.setState({ counter: this.props.counter });
    }

    if (
      this.props.match.params.questionID !== prevProps.match.params.questionID
    ) {
      this.props.resetCounter();
      this.props.reset();
      this.props.fetchQDetail(this.props.match.params.questionID);
    }
  }
  render() {
    console.log("Counter", this.state.counter);
    const { question } = this.props;
    console.log("Question : ", question);
    const questoinID = this.props.match.params.questionID;

    // this.props.fetchQDetail(questoinID);
    console.log(questoinID);
    const { profile } = this.props;
    return (
      <div className="form-group col-lg-12 col-12 mx-auto">
        <br />
        <br />
        <div className="main-content-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <div className="listing-grid ">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="cardn w-100">
                        <div className="card-body noborder">
                          <a href="#">{renderHTML(question.q_text || "")}</a>
                        </div>
                      </div>
                      <div className="listing-meta">
                        <span>
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          {question.created_on}
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="tagcloud">
                        <a href="">{question.major && question.major.major}</a>
                      </div>
                      <br />
                      <div>
                        {(profile && profile.is_expert) || "" ? (
                          <div>
                            <div>
                              <button
                                onClick={() =>
                                  this.props.deleteQuestion(
                                    questoinID,
                                    this.props.history
                                  )
                                }
                                className="btn btn-danger"
                              >
                                Remove
                              </button>
                            </div>
                            <br />
                            <div>
                              <button
                                onClick={async () => {
                                  await this.setState({
                                    boolean:
                                      this.state.counter > 0 ? true : false
                                  });
                                  this.props.approveQuestion(
                                    questoinID,
                                    this.state.boolean,
                                    this.props.history
                                  );
                                  await this.props.resetCounter();
                                }}
                                className="btn btn-success"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thread-reply">
                  <h2>Thread Reply </h2>
                  <QAnswers id={questoinID} />
                </div>
                <span> </span>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12 clearfix">
                <div className="side-bar">
                  <div className="widget">
                    <div className="widget-image widget-image-sm">
                      <img
                        alt="image"
                        src="https://external-preview.redd.it/1ZBAIokLtVcHkjHFryTz9zsOgq8B33bn-6SwZwkmrDg.png?auto=webp&s=4b5062c0c6339591198df367deced85fba8eac92"
                      />
                      <div className="widget-image-content text-center">
                        <img
                          className="img-thumbnail"
                          alt="avatar"
                          src={question.asked_by && question.asked_by.image}
                        />
                        <h2 className="widget-heading text-light">
                          <strong>
                            {question.asked_by && question.asked_by.username}
                          </strong>
                        </h2>
                        <h4 className="widget-heading text-light-op">
                          <br />
                          <br />
                        </h4>
                      </div>
                    </div>

                    <div className="widget-content border-bottom">
                      <h4>About:</h4>
                      <p>
                        name:{" "}
                        {question.asked_by && question.asked_by.first_name}{" "}
                        {question.asked_by && question.asked_by.last_name}
                      </p>
                      <p>
                        email: {question.asked_by && question.asked_by.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <AnswerForm id={questoinID} />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question,
    counter: state.questions.counter,
    profile: state.profileReducer.profile,
    user: state.authenticationReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: (questionID, history) =>
      dispatch(actionCreators.deleteQuestion(questionID, history)),
    fetchQDetail: questionID =>
      dispatch(actionCreators.fetchQDetail(questionID)),
    fetchProfileDetail: userID =>
      dispatch(actionCreators.fetchProfileDetail(userID)),
    reset: () => dispatch({ type: "RESET" }),
    resetCounter: () => dispatch({ type: "RESET_COUNTER" }),
    approveQuestion: (questionID, status, history) =>
      dispatch(actionCreators.approveQuestion(questionID, status, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QDetail);
