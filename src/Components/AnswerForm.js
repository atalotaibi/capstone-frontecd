import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AnswerForm extends Component {
  state = { a_text: "" };

  submitAnswer = e => {
    e.preventDefault();
    console.log(e);
    const questionID = this.props.id;
    this.props.sendAnswer(this.state, questionID, this.resetForm);
  };

  resetForm = (a_text = "") => this.setState({ a_text });

  render() {
    const { a_text } = this.state;
    const questionID = this.props.id;

    return (
      <div>
        <form className="col-12 mx-auto" onSubmit={this.submitAnswer}>
          <ReactQuill
            modules={AnswerForm.modules}
            formats={AnswerForm.formats}
            value={a_text}
            rows="5"
            placeholder="write your answer "
            onChange={e => this.setState({ a_text: e })}
          />
          <br />
          <button className="btn btn-dark col-12 mx-auto">
            <h5>Post</h5>
          </button>
        </form>
      </div>
    );
  }
}

AnswerForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }],
    [{ background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

AnswerForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
  "color",
  "background",
  "align"
];

const mapDispatchToProps = dispatch => {
  return {
    sendAnswer: (a_text, questionID, reset) =>
      dispatch(actionCreators.sendAnswer(a_text, questionID, reset))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AnswerForm);
