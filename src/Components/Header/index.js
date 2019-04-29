import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link, NavLink } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";
import logo from "../../assets/images/Screenshot 2019-04-27 at 22.21.54.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import questionsReducer from "../../store/reducers/questionsReducer";

// Fontawesome

class Navbar extends Component {
  render() {
    console.log(this.props.user);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-lightt">
        <div className="col-9">
          <NavLink to="/home">
            <img className="ssize" src={logo} />
          </NavLink>
        </div>
        <div className="col-3d">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.props.user ? (
                <li className="nav-item">
                  <i className="fas fa-sign-out-alt" />
                  {/* <a class="nav-link" /> comment this out */}
                  <Link
                    onClick={() => this.props.logout()}
                    to="Home"
                    style={{
                      color: "black"
                    }}
                  >
                    Logout {this.props.user.username}
                  </Link>
                  <div>
                    <span>
                      <Link
                        style={{
                          color: "black"
                        }}
                        to={this.props.user ? "/QForm" : "/login"}
                      >
                        <FontAwesomeIcon icon={faPlusSquare} />
                        <span> </span>post a question
                      </Link>
                    </span>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <span>
                      <i
                        className="fas fa-user-plus"
                        style={{
                          color: "black",
                          marginLeft: 10
                        }}
                      />
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/signup"
                      >
                        SignUp
                      </Link>
                      {/* <a className="nav-link">SignUp</a> */}
                    </span>
                  </li>

                  <li className="nav-item">
                    <span>
                      <i
                        className="fas fa-sign-in-alt"
                        style={{
                          color: "black",
                          marginLeft: 10
                        }}
                      />
                      {/* <a class="nav-link">SignIn</a> comment this out */}
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/login"
                      >
                        SignIn
                      </Link>
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
