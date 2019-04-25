import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import { from } from "rxjs";
// Fontawesome

class Navbar extends Component {
  render() {
    console.log(this.props.user);
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-9">
          <Link class="navbar-brand" to="/home">
            LookUp
          </Link>
        </div>
        <div className="col-3">
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
                ((
                  <li class="nav-item">
                    <a class="nav-link">SignUp</a>
                  </li>
                ),
                (
                  <li class="nav-item">
                    <a class="nav-link">SignIn</a>
                  </li>
                ))
              ) : (
                <li class="nav-item">
                  <a class="nav-link">Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      // <html>
      //   <meta name="viewport" content="width=device-width, initial-scale=1" />
      //   <nav className="navbar navbar-expand-lg navbar-light tbn">
      //     <div className="collapse navbar-collapse ">
      //       <a class="navbar-brand" href="#">
      //         Home
      //         {/* <img
      //           className="card-img-top"
      //           src={linkedin_profile_image}
      //           alt="hgh"
      //           style={{ width: 350, height: 90 }}
      //         /> */}
      //       </a>
      //       <button
      //         class="navbar-toggler"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbarNav"
      //         aria-controls="navbarNav"
      //         aria-expanded="false"
      //         aria-label="Toggle navigation"
      //       >
      //         <span class="navbar-toggler-icon" />
      //       </button>
      //       <ul className="navbar-nav" style={{ paddingLeft: "75%" }}>
      //         {/* <div className="user-panel"> */}
      //         <li className="nav-item">
      //           <a class="nav-link " href="#">
      //             <i class="fas fa-sign-out-alt">
      //               <Link
      //                 onClick={() => this.props.logout()}
      //                 to="Home"
      //                 style={{ color: "gray" }}
      //               >
      //                 Log Out
      //               </Link>
      //             </i>
      //           </a>
      //         </li>

      //         {/* <li class="nav-item active">
      //           <a class="nav-link" href="#">
      //             <a class="active" href="#">
      //               <i class="fa fa-home" />
      //             </a>
      //             Home
      //           </a>
      //         </li> */}
      //         <div>
      //           <li className="nav-item">
      //             <a class="nav-link " href="#">
      //               <i class="fas fa-user-plus" />
      //               <Link to="/signup" style={{ color: "gray" }}>
      //                 SignUp
      //               </Link>
      //             </a>
      //           </li>
      //         </div>
      //         <div>
      //           <li class="nav-item">
      //             <a class="nav-link" href="#">
      //               <i class="fas fa-sign-in-alt" />
      //               <Link to="/signup" style={{ color: "gray" }}>
      //                 {"        "}
      //                 SignIn
      //               </Link>
      //             </a>
      //           </li>
      //         </div>
      //         {/* </div> */}
      //       </ul>
      //     </div>
      //   </nav>
      // </html>

      // /* <li class="nav-item ">
      //        <a class="nav-link " href="#">
      //          Disabled
      //        </a>
      //      </li>  */

      // // <ignore whats under this>

      // // <div>
      // //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      // //     <div className="container">
      // //       <a className="navbar-brand" href="#">
      // //         LookUp
      // /* <img
      //               className="card-img-top"
      //               src={linkedin_profile_image}
      //               alt="hgh"
      //               style={{ width: 350, height: 90 }}
      //             /> */
      // /* </a> */
      // /* <button
      //         className="navbar-toggler"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbarResponsive"
      //         aria-controls="navbarResponsive"
      //         aria-expanded="false"
      //         aria-label="Toggle navigation"
      //       >
      //         <span className="navbar-toggler-icon" />
      //       </button> */
      // /* <div className="col-xl-8 col-lg-8  ">
      //         <Search history={this.props.history} />
      //       </div> */
      // //       <div className="col-xl-4 col-lg-4  float-right">
      // //         <div className="user-panel">
      // //           {this.props.user ? (
      // //             <div>
      // //               <div className="up-item ml-3">
      // //                 <i class="fas fa-user-circle" />
      // //                 <Link to="/profile">{this.props.user.username}</Link>
      // //               </div>
      // //               <div className="up-item ml-3">
      // //                 <i class="fas fa-sign-out-alt" />
      // //                 <Link onClick={() => this.props.logout()} to="Home">
      // //                   Log Out
      // //                 </Link>
      // //               </div>
      // //               <div className="up-item">
      // //                 <div className="shopping-card">
      // //                   <i className="flaticon-bag" />
      // //                   Ask Question
      // //                 </div>
      // //                 <Link to="/QForm" />
      // //               </div>
      // //             </div>
      // //           ) : (
      // //             <div className="navbar-nav ml-auto">
      // //               <div className="up-item ml-3">
      // //                 <i
      // //                   class="fas fa-user-plus"
      // //                   style={{ color: "gray", marginLeft: 5 }}
      // //                 />
      // //                 <Link to="/signup">Sign up</Link>
      // //               </div>
      // //               <div className="up-item ml-3">
      // //                 <i
      // //                   class="fas fa-sign-in-alt"
      // //                   style={{ color: "gray", marginLeft: 5 }}
      // //                 />
      // //                 <Link to="/login">Sign In</Link>
      // //                  <li className="nav-item">
      // //                   <a className="nav-link" href="#">
      // //                     Services
      // //                   </a>
      // //                 </li>
      // //                 <li className="nav-item">
      // //                   <a className="nav-link" href="#">
      // //                     Contact
      // //                   </a>
      // //                 </li>
      // //               </div>
      // //             </div>
      // //           )}
      // //         </div>
      // //       </div>
      // //     </div>
      // //   </nav>
      // // </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
