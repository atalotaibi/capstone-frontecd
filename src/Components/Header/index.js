
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link, NavLink } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";

// Fontawesome

class Navbar extends Component {
  render() {
    console.log(this.props.user);
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-9">
          <NavLink style={{ textDecoration: "none", color: "gray" }} to="/home">
            LookUp
          </NavLink>
        </div>
        <div className="col-3d">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {this.props.user ? (
                <li class="nav-item">
                  <i class="fas fa-sign-out-alt" />
                  {/* <a class="nav-link" /> comment this out */}
                  <Link
                    onClick={() => this.props.logout()}
                    to="Home"
                    style={{
                      color: "gray"
                    }}
                  >
                    Logout {this.props.user.username}
                  </Link>
                </li>
              ) : (
                <div>
                  <li className="nav-item">
                    <span>
                      <i
                        class="fas fa-user-plus"
                        style={{
                          color: "gray",
                          marginLeft: 5
                        }}
                      />
                      <Link
                        style={{ textDecoration: "none", color: "gray" }}
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
                        class="fas fa-sign-in-alt"
                        style={{
                          color: "gray",
                          marginLeft: 5
                        }}
                      />
                      {/* <a class="nav-link">SignIn</a> comment this out */}
                      <Link
                        style={{ textDecoration: "none", color: "gray" }}
                        to="/login"
                      >
                        SignIn
                      </Link>
                    </span>
                  </li>
                </div>
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

