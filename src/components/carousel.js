import React, { Component } from "react"
import $ from "jquery"

export default class Carousel extends Component {
  componentDidMount() {
    $(".carousel").carousel({
      interval: 2000,
      keyboard: true,
      pause: "hover",
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-8 m-auto">
            <div
              id="slider3"
              className="carousel slide mb-5"
              data-ride="carousel"
              data-keyboard="true"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-target="#slider3"
                  data-slide-to="0"
                ></li>
                <li data-target="#slider3" data-slide-to="1"></li>
                <li data-target="#slider3" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="https://source.unsplash.com/wgq4eit198Q/700x400"
                    alt="First Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://source.unsplash.com/WLUHO9A_xik/700x400"
                    alt="Second Slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://source.unsplash.com/4yta6mU66dE/700x400"
                    alt="Third Slide"
                  />
                </div>
              </div>

              <a
                href="#slider3"
                className="carousel-control-prev"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>

              <a
                href="#slider3"
                className="carousel-control-next"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
