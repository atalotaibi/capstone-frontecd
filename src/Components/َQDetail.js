import React, { Component } from "react";
import QAnswers from "./QAnswers";
import AnswerForm from "./AnswerForm";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import loading from "./Loading";

class QDetail extends Component {
  componentDidMount() {
    console.log("qid is: ", this.props.match.params.questionID);
    this.props.fetchQDetail(this.props.match.params.questionID);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.questoinID !== prevProps.match.params.questoiinID
    ) {
      this.props.reset();

      this.props.fetchQDetail(this.props.match.params.questionID);
    }
  }
  render() {
    const { question } = this.props;
    const questoinID = this.props.match.params.questionID;
    return (
      <div className="form-group col-lg-10 col-12 mx-auto">
        <div class="main-content-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <div className="listing-grid ">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="cardn w-100">
                        <div className="card-body noborder">
                          <a href="#">{renderHTML(question.q_text || "")}</a>
                          <button
                            onClick={() =>
                              this.props.deleteQuestion(
                                questoinID,
                                this.props.history
                              )
                            }
                            className="pull-rightt btn btn-danger"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="listing-meta">
                        {" "}
                        <span>
                          <i className="fa fa-clock-o" aria-hidden="true" />8
                          mintes ago
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div class="tagcloud">
                        <a href="">bootstrap</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="clearfix" />

                <div className="thread-reply">
                  <h2>Thread Reply </h2>
                  <QAnswers id={questoinID} />
                  <div>
                    <AnswerForm id={questoinID} />
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12 clearfix">
                <div class="side-bar">
                  <div class="widget">
                    <div class="widget-image widget-image-sm">
                      {" "}
                      <img
                        alt="image"
                        src="https://external-preview.redd.it/1ZBAIokLtVcHkjHFryTz9zsOgq8B33bn-6SwZwkmrDg.png?auto=webp&s=4b5062c0c6339591198df367deced85fba8eac92"
                      />
                      <div class="widget-image-content text-center">
                        {" "}
                        <img
                          class="img-thumbnail"
                          alt="avatar"
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Jon_Kyl%2C_official_portrait%2C_115th_Congress.jpg"
                        />
                        <h2 class="widget-heading text-light">
                          <strong>John Doe</strong>
                        </h2>
                        <h4 class="widget-heading text-light-op">
                          <br />
                          <br />
                        </h4>
                      </div>
                    </div>
                    <div class="widget-content widget-content-full border-bottom">
                      <div class="row text-center">
                        <div class="col-xs-6 push-inner-top-bottom border-right">
                          <h3 class="widget-heading">
                            <i class=" icon-trophy push" /> <br />
                            <small>
                              <strong>34,157</strong> Experience
                            </small>
                          </h3>
                        </div>
                        <div class="col-xs-6 push-inner-top-bottom">
                          <h3 class="widget-heading">
                            <i class=" icon-profile-male themed-color-social push" />{" "}
                            <br />
                            <small>
                              <strong>58.6k</strong> Followers
                            </small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content border-bottom">
                      <h4>About</h4>
                      <p>
                        Proin ac nibh rutrum lectus rhoncus eleifend. Sed
                        porttitor pretium venenatis. Suspendisse potenti.
                        Aliquam quis ligula elit.
                      </p>
                      <p>
                        Sed porttitor pretium venenatis. Suspendisse potenti.
                        Aliquam quis ligula elit. Aliquam at orci ac neque
                        semper dictum.
                      </p>
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

const mapStateToProps = state => {
  return {
    question: state.questions.question
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: (questionID, history) =>
      dispatch(actionCreators.deleteQuestion(questionID, history)),
    fetchQDetail: questionID =>
      dispatch(actionCreators.fetchQDetail(questionID)),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QDetail);
