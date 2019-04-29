import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
// Components
import Answer from "./Answer";
import AnswerForm from "./AnswerForm";
import { Link } from "react-router-dom";

class QAnswers extends Component {
  componentDidMount() {
    this.props.resetCounter();
    const questionID = this.props.id;
    this.props.fetchAnswers(questionID);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.answers !== this.props.answers) {
      const questionID = this.props.id;
      this.props.fetchAnswers(questionID);
    }
  }

  getView = () => {
    let answer = "";

    answer = this.props.answers.map(answer => (
      <Answer key={answer.id} answer={answer} />
    ));

    return <div>{answer}</div>;
  };
  render() {
    return (
      <div className="form-group col-lg-12 col-12 mx-auto">
        {this.getView()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.questions.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswers: questionID =>
      dispatch(actionCreators.fetchAnswers(questionID)),
    resetCounter: () => dispatch({ type: "RESET_COUNTER" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QAnswers);
