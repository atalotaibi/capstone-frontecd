import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { Qlist } from "./Qlist";
import { Link } from "react-router-dom";

class QForm extends Component {
  state = {
    q_text: "",
    major: ""
  };
  textChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log("[QForm.js handlsubmit]");
    this.props.askQ(this.state);
    this.setState({
      q_text: "",
      major: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="orm-control"
            type="select"
            placeholder="select"
            name="major"
            onChange={this.textChangeHandler}
          />
          <select
            type="select"
            placeholder="select"
            name="major"
            onChange={this.textChangeHandler}
            multiple="multiple"
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Ask"
            name="q_text"
            onChange={this.textChangeHandler}
          />

          <Link to="/Qlist">
            <button type="submit">post</button>
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    askQ: question => dispatch(actionCreators.askQ(question)),
    fetchMajors: major => dispatch(actionCreators.fetchMajors(major))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QForm);
