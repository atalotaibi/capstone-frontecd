import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
};

const formatTimeS = ts => {
  let date = new Date(ts);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let datestr = day + " " + monthNames[monthIndex] + " " + year;
  let time = formatAMPM(date);

  return datestr + " | " + time;
};

class Profile extends Component {
  async componentDidMount() {
    await this.props.getProfileDetail();
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log("TCL: Profile -> componentDidUpdate -> prevProps", prevProps);
    // console.log("TCL: Profile -> componentDidUpdate -> prevProps", this.props);

    if (prevProps.user !== this.props.user || !this.props.profile) {
      await this.props.getProfileDetail();

      console.log("this.props.profile: erroraaa ", this.props.profile);
    }
  }
  // bitch i did what i said to do
  render() {
    let { profile } = this.props;

    // kjyuykfkuyguyk
    return (
      <div className="row">
        <div className="col-3 ">
          <div className="card align-items-center" style={{ height: "100%" }}>
            {profile && !this.props.profile.image ? (
              <img
                src={require("../../assets/images/cafe.png")}
                className="card-img-top "
                alt="user_pic"
              />
            ) : (
              <img
                src={profile && this.props.profile.image}
                className="card-img-top "
                alt="user_pic"
              />
            )}
            <div className="card-body text-center">
              <h5 className="card-title">
                @{profile && profile.customer.username}
              </h5>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {profile &&
                  `${profile.customer.first_name} ${
                    profile.customer.last_name
                  }`}
              </p>
              <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
                {profile && `${profile.customer.email}`}
              </p>
              <div className="row justify-content-md-center my-5">
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileDetail: () => dispatch(actionCreators.fetchProfileDetail())
  };
};
const mapStateToProps = state => ({
  user: state.authenticationReducer.user,
  profile: state.profileReducer.profile
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
