import React, { Component } from "react";
import './ComparaCarro.css';
import Header from '../components/header/header';
import Slider from "react-slick";


export default class ComparaCarro extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2>Fade</h2>
          <Slider {...settings}>
            <div>
              <h1> PEDRO </h1>
            </div>
            <div>
              <h1> JOSE </h1>
            </div>
            <div>
              <h1> AUGUSTU </h1>
            </div>
            <div>
              <h1> ZÉ </h1>
            </div>
          </Slider>
        </div>
      );
    }
  }