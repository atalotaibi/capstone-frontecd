import React, { Component } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Qlist from "../Qlist";

import * as actionCreators from "../../store/actions";

class Search extends Component {
  render() {
    const { majors } = this.props;
    const majorList = majors.map(major => major.major);
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <br />

        <br />
        {/* <div className="form-group">
          <select
            type="select"
            placeholder="select"
            name="major"
            onChange={event =>
              event.target.value
                ? this.props.filterQuestionsByMajor(event.target.value)
                : this.props.reset() && this.props.fetchQ()
            }
            multiple="multiple"
            className="form-control"
          >
            <option value="greeting">greeting</option>
            <option value="math">math</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div> */}

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="all"
            onChange={() => {
              this.props.reset();
              this.props.fetchQ();
            }}
          />
          <label className="form-check-label" for="inlineRadio1">
            all
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[0]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[0]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[1]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[1]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[2]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[2]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[3]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[3]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[4]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[4]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[5]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[5]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[6]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[6]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[7]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[7]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[8]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[8]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[9]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[9]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[10]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[10]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[11]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[11]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[12]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[12]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[13]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[13]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value={majorList[14]}
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[14]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="true"
            onChange={event =>
              this.props.filterQuestionsByAnswer(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            answered
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="false"
            onChange={event =>
              this.props.filterQuestionsByAnswer(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            unanswered
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="true"
            onChange={event =>
              this.props.filterQuestionsByApprove(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            approved
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="false"
            onChange={event =>
              this.props.filterQuestionsByApprove(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            unapproved
          </label>
        </div>

        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your search"
            onChange={event => {
              this.props.filterQuestions(event.target.value);
            }}
          />

          <div className="AAB ">
            <span className="AAC">

            </span>
          </div>
        </div>
        <div>
          <Qlist />
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
)(Search);
