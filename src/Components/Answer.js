import React, { Component } from "react";
import renderHTML from "react-render-html";
class Answer extends Component {
  render() {
    const answer = this.props.answer;
    return (
      <div className="media-block card-box ribbon-content">
        <div className="ribbon base">
          <span>Approved</span>
        </div>

        <div className="media-left">
          <a
            data-toggle="tooltip"
            data-placement="bottom"
            data-original-title="Martina Jaz"
            href="#"
          >
            <img
              className="img-sm"
              alt="Profile Picture"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Jon_Kyl%2C_official_portrait%2C_115th_Congress.jpg"
            />
          </a>
        </div>
        <div className="media-body">
          <div className="mar-btm">
            <h4>
              <a
                href="#"
                class="btn-link text-semibold media-heading box-inline"
              >
                Muhammad Umair
              </a>
            </h4>
            <p className="text-muted text-sm">
              <i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min ago
            </p>
          </div>
          <h5>{renderHTML(answer.a_text)}</h5>
          <div />
          <div className="pad-ver pull-right">
            <a
              className="btn btn-sm btn-default btn-hover-success"
              data-toggle="tooltip"
              data-placement="bottom"
              data-original-title="Like This Answer"
              href="#"
            >
              <i class="fa fa-thumbs-up" />
            </a>
            <a
              className="btn btn-sm btn-default btn-hover-danger"
              href="#"
              data-original-title="Spam"
              data-placement="bottom"
              data-toggle="tooltip"
            >
              <i className="fa fa-thumbs-down" />
            </a>
            <a class="btn btn-sm btn-default btn-hover-primary" href="#">
              Mark As Correct
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
