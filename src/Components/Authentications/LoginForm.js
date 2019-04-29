import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

import { Search } from "../Search";
import { Redirect, withRouter } from "react-router-dom";
=======

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    loginalertUsername: false,
    loginalertPassword: false
  };
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/Home");
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e, type) => {
    e.preventDefault();


    if (this.props.username && this.props.passsword) {
      this.setState({
        loginalertUsername: false,
        loginalertPassword: false
      });
      this.props.login(this.state, this.props.history);
    } else {
      this.setState({ loginalertUsername: true, loginalertPassword: true });


    if (type === "login") {
      await this.props.login(this.state);
      this.props.fetchProfileDetail(
        this.props.user.user_id,
        this.props.history
      );

    }
    this.props.login(this.state, this.props.history);
  };

  render() {
    const error = this.props.errors;
    const type = this.props.match.url.substring(1);
    if (this.props.user) {
      return <Redirect to="/Home" />;
    }
    return (

      <div class="signup-form animated bounceInDown">
        <form onSubmit={event => this.submitHandler(event, type)}>
          <h2>Log In</h2>
          <p class="lead">It's free and hardly takes more than 30 seconds.</p>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user" />
              </span>

              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                required="required"
                onChange={this.changeHandler}
              />
            </div>

          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock" />
              </span>

              <input
                type="text"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
                onChange={this.changeHandler}
              />
            </div>
          </div>


          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">
              Login
            </button>
          </div>
          <p class="small text-center">
            By clicking the Sign Up button, you agree to our
            <br />
            <a href="#">Terms &amp; Conditions</a>, and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <div class="text-center">
            Already have an account? <a href="#">Login here</a>.
          </div>
        </form>
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
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  fetchProfileDetail: (userID, history) =>
    dispatch(actionCreators.fetchProfileDetail(userID, history))
});

const mapStateToProps = state => ({
  user: state.authenticationReducer.user,
  error: state.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
