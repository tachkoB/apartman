import React, { Component } from "react"
import $ from "jquery"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import car1 from "../images/car1.jpg"
import car2 from "../images/car2.jpg"
import car3 from "../images/car3.jpg"

export default class Carousel extends Component {
  componentDidMount() {
    $(".carousel").carousel({
      interval: 6000,
      keyboard: true,
      pause: "hover",
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div
            id="slider3"
            className=" carousel slide"
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
              <div className=" carousel-item active">
                <img
                  className="images-slider d-block  min-vh-100 img-fluid"
                  src={car3}
                  alt="First Slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="images-slider d-block min-vh-100 img-fluid"
                  src={car2}
                  alt="Second Slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="images-slider d-block min-vh-100 img-fluid"
                  src={car1}
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
        <div className="photo"></div>
      </div>
    )
  }
}
