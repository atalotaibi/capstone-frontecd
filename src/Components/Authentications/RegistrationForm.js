import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class RegistrationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  };
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/Home");
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e, type) => {
    e.preventDefault();
    if (type === "signup") {
      this.props.signup(this.state, this.props.history);
    } else {
      this.props.login(this.state, this.props.history);
    }
  };

  render() {
    const type = this.props.match.url.substring(1);
    if (this.props.user) {
      return <Redirect to="/Home" />;
    }
    return (
      <div class="signup-form animated bounceInDown">
        <form onSubmit={event => this.submitHandler(event, type)}>
          <h2>Create Account</h2>
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
                <i class="fa fa-user" />
              </span>
              <input
                type="text"
                class="form-control"
                name="first_name"
                placeholder="first Name"
                required="required"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user" />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={this.changeHandler}
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-paper-plane" />
              </span>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
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
              Sign Up
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history))
});
const mapStateToProps = state => ({
  user: state.authenticationReducer.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
