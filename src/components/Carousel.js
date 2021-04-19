import React, { Component } from "react";
import Slider from "react-slick";
import BeerItem from "./BeerItem";
import { Link, useLocation } from "react-router-dom";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      beerList1: [],
      beerList2: [],
      beerList3: [],
      beerList4: [],
      j: "",
      link: "",
    };
  }

  componentDidMount() {
    const axios = require("axios");
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) =>
        this.setState({
          beerList: response.data,
          beerList1: response.data.slice(3, 8),
          beerList2: response.data.slice(7, 12),
        })
      )
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  componentDidUpdate() {
    console.log(this.state.beerList1);
    console.log(this.state.beerList2);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 0.2,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="carousel-bg">
        <h3 className="checkOut1">Cant decide? Here's our beer of the week!</h3>
        <Link
          to="/Random"
          className="beerWeekBtn"
        >{`>> Beer of the Week`}</Link>
        <Slider {...settings}>
          <div>
            <div className="carouselItem">
              {this.state.beerList1.map((elt) => (
                <BeerItem
                  name={elt.name}
                  img={elt.image_url}
                  tagline={elt.tagline}
                  contribute={elt.contributed_by}
                  id={elt._id}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="carouselItem">
              {this.state.beerList2.map((elt) => (
                <BeerItem
                  name={elt.name}
                  img={elt.image_url}
                  tagline={elt.tagline}
                  contribute={elt.contributed_by}
                  id={elt._id}
                />
              ))}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
