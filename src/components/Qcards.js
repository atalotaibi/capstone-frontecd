import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnswerForm from "./AnswerForm";
import renderHTML from "react-render-html";

import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class Qcards extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="panel-body">
          <div className="tab-content">
            <div id="tab1" className="tab-pane active">
              <div className="listing-grid">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
                    <a
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Martina Jaz"
                      href="#"
                    >
                      <img
                        alt=""
                        className="img-responsive center-block"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Jon_Kyl%2C_official_portrait%2C_115th_Congress.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-sm-8  col-xs-12">
                    <h3>
                      <div className="cardn w-100">
                        <div className="card-body">
                          <Link to={`/questions/${question.id}`}>
                            <h4>{renderHTML(question.q_text)}</h4>
                            {/* <h5 className="card-title">{renderHTML(question.q_text)}</h5> */}

                            <p className="card-text" />
                          </Link>
                        </div>{" "}
                      </div>
                    </h3>
                    <div className="listing-meta">
                      {" "}
                      <span>
                        <i class="fa fa-clock-o" aria-hidden="true" />8 mintes
                        ago
                      </span>{" "}
                      <span>
                        <i class="fa fa fa-eye" aria-hidden="true" /> 750 Views
                      </span>
                    </div>
                    <div className="pull-right tagcloud">
                      <a href="">Php</a>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 col-xs-12">
                    <ul className="question-statistic">
                      <li className="active">
                        {" "}
                        <a
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Answers"
                        >
                          <span>2</span>
                        </a>
                      </li>
                      <span> </span>
                      <li />
                    </ul>
                  </div>
                </div>
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
    deleteQuestion: questionID =>
      dispatch(actionCreators.deleteQuestion(questionID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Qcards);

{
  /* <section className="white question-tabs padding-bottom-80" id="latest-post">
			<div className="container">
				<div className="row">
				
					<div className="col-md-12 col-sm-12 col-xs-12">
					
						<div className="panel-body">
							<div className="tab-content">
								<div id="tab1" className="tab-pane active">
									<!-- Question Listing -->
									<div className="listing-grid">
										<div className="row">
											<div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
												<a data-toggle="tooltip" data-placement="bottom" data-original-title="Martina Jaz" href="#">
													<img alt="" className="img-responsive center-block" src="images/authors/1.jpg">
												</a>
											</div>
											<div className="col-md-7 col-sm-8  col-xs-12">
												<h3><a href="#"> Php recursive function not working right</a></h3>
												<div className="listing-meta"> <span><i class="fa fa-clock-o" aria-hidden="true"></i>8 mintes ago</span>  <span><i class="fa fa fa-eye" aria-hidden="true"></i> 750 Views</span> 
												</div>
											</div>
											<div className="col-md-3 col-sm-2 col-xs-12">
												<ul className="question-statistic">
													<li className="active"> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Answers"><span>2</span></a> 
													</li>
													<li> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Votes"><span>0</span></a> 
													</li>
												</ul>
											</div>
											<div className="col-md-10 col-sm-10  col-xs-12">
												<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
												<div className="pull-right tagcloud"> <a href="">Php</a>  <a href="">recursive</a>  <a href="">error</a> 
												</div>
											</div>
										</div>
									</div>
									<!-- Question Listing End -->
								
									
									<!-- Question Listing -->
									<div className="listing-grid ">
										<div className="row">
											<div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
												<a data-toggle="tooltip" data-placement="bottom" data-original-title="Muhammad Umair" href="#">
													<img alt="" className=" img-responsive center-block" src="images/authors/4.jpg">
												</a>
											</div>
											<div className="col-md-7 col-sm-8  col-xs-12">
												<h3><a href="#"> Choosing bootstrap vs material design</a></h3>
												<div className="listing-meta"> <span><i class="fa fa-clock-o" aria-hidden="true"></i>8 mintes ago</span>  <span><i class="fa fa fa-eye" aria-hidden="true"></i> 750 Views</span> 
												</div>
											</div>
											<div className="col-md-3 col-sm-2 col-xs-12">
												<ul className="question-statistic">
													<li className="active"> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Answers"><span>332</span></a> 
													</li>
													<li> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Votes"><span>55</span></a> 
													</li>
												</ul>
											</div>
											<div className="col-md-10 col-sm-10  col-xs-12">
												<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
												<div className="pull-right tagcloud"> <a href="">bootstrap</a>  <a href="">material</a> 
												</div>
											</div>
										</div>
									</div>
									<!-- Question Listing End --></div>
								</div>
								<div id="tab2" className="tab-pane">
									<!-- Question Listing -->
									<div className="listing-grid">
										<div Name="row">
											<div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
												<a data-toggle="tooltip" data-placement="bottom" data-original-title="Martina Jaz" href="#">
													<img alt="" className="correct img-responsive center-block" src="images/authors/5.jpg" style="">
												</a> <span className="tick2"> <i class="fa fa-check" aria-hidden="true"></i> </span> 
											</div>
											<div class="col-md-7 col-sm-8  col-xs-12">
												<h3><a href="#"> Php recursive function not working right</a></h3>
												<div className="listing-meta"> <span><i class="fa fa-clock-o" aria-hidden="true"></i>8 mintes ago</span>  <span><i class="fa fa fa-eye" aria-hidden="true"></i> 750 Views</span>  <span><i class="fa fa-comment" aria-hidden="true"></i>50 Comment</span> 
												</div>
											</div>
											<div className="col-md-3 col-sm-2 col-xs-12">
												<ul className="question-statistic">
													<li className="active"> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Answers"><span>2</span></a> 
													</li>
													<li> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Votes"><span>0</span></a> 
													</li>
												</ul>
											</div>
											<div className="col-md-10 col-sm-10  col-xs-12">
												<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
												<div className="pull-right tagcloud"> <a href="">Php</a>  <a href="">recursive</a>  <a href="">error</a> 
												</div>
											</div>
										</div>
									</div>
									<!-- Question Listing End -->	
	
								
								
								</div>
								<!-- Pagination View More -->
								<div className="text-center clearfix">
									<button className="btn btn-primary btn-lg">View All Question</button>
								</div>
								<!-- Pagination View More End -->
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<!-- end container -->
		</section> */
}
