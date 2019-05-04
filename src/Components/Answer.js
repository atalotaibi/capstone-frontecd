import React, { Component } from "react";
import renderHTML from "react-render-html";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Answer extends Component {
  state = {
    checked: false
  };

  componentDidMount = () => {
    if (this.props.user) {
      this.props.fetchProfileDetail(this.props.user.user_id);
    }
    if (this.props.answer.approved) {
      console.log(this.props.answer.approved);
      this.setState({ checked: !this.state.checked });
      this.props.incrementCounter(true);
    }
  };

  handleClick = async () => {
    await this.setState({ checked: !this.state.checked });
    this.props.approveAnswer(this.props.answer.id, this.state.checked);
  };
  changeApproved = async () => {
    await this.setState({ checked: !this.state.checked });
    this.props.approveAnswer(this.props.answer.id, this.state.checked);
  };

  render() {
    const answer = this.props.answer;
    const { profile } = this.props;
    return (
      <div className="media-block card-box ribbon-content">
        {profile && profile.is_expert ? (
          <></>
        ) : (
          <>
            {" "}
            {answer.approved ? (
              <div class="ribbon base">
                <span>Correct Answer</span>
              </div>
            ) : (
              <></>
            )}
          </>
        )}

        <div className="media-left">
          <a
            data-toggle="tooltip"
            data-placement="bottom"
            data-original-title="Martina Jaz"
            href="#"
          >
            <img
              className="img-sm"
              alt="Profile Picture"
              src={answer.answered_by && answer.answered_by.image}
            />
          </a>
        </div>
        <div className="media-body">
          <div className="mar-btm">
            <h4>
              <a
                href="#"
                class="btn-link text-semibold media-heading box-inline"
              >
                {answer.answered_by && answer.answered_by.username}
              </a>
            </h4>
          </div>
          <h5>{renderHTML(answer.a_text)}</h5>
          <div className="row">
            <div className="col-2">
              {profile && profile.is_expert ? (
                <div>
                  {answer.approved ? (
                    <>
                      {/* <div className="">
                      <a
                        class="btn btn-sm btn-default btn-hover-primary"
                        onClick={this.changeApproved}
                      >
                        Mark As Uncorrect
                      </a>
                    </div> */}
                      <div className="form-check form-check-inline">
                        <input
                          defaultChecked
                          className="form-check-input"
                          type="checkbox"
                          name="inlineCheckbox"
                          onChange={this.changeApproved}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* <div className="">
                      <a
                        class="btn btn-sm btn-default btn-hover-primary"
                        onClick={this.handleClick}
                      >
                        Mark As Correct
                      </a>
                    </div> */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="inlineCheckbox"
                          onChange={this.handleClick}
                        />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div />
              )}
            </div>
            {/* <div className="col-10">
              <h4>{renderHTML(answer.a_text)}</h4>
            </div>{" "} */}
          </div>
          {/* <div className="pad-ver pull-right">
            <a class="btn btn-sm btn-default btn-hover-primary" onClick={this.handleClick}>
              Mark As Uncorrect
            </a>
          </div> */}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    user: state.authenticationReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    approveAnswer: (answerID, status) =>
      dispatch(actionCreators.approveAnswer(answerID, status)),
    fetchProfileDetail: userID =>
      dispatch(actionCreators.fetchProfileDetail(userID)),
    incrementCounter: status =>
      dispatch(actionCreators.incrementCounter(status))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
