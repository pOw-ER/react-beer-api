import { motion } from "framer-motion";
import Contact from "./Contact";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beerDatas: [],
      dataRecived: false,
      beerName: "Loading...",
      slogan: "Loading...",
      firstBrew: "",
      attenuationLevel: "",
      image_url: " ",
      description: "",
      contributer: "",
    };
  }
  componentDidMount() {
    this.call();
  }

  call = () => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((json) => {
        let j = Math.floor(Math.random() * json.length);
        this.setState({
          dataRecived: true,
          beerDatas: json,
          beerName: json[j].name,
          slogan: json[j].tagline,
          firstBrew: json[j].first_brewed,
          attenuationLevel: json[j].attenuation_level,
          image_url: json[j].image_url,
          description: json[j].description,
          contributer: json[j].contributer,
        });
        console.log(this.state.beerDatas[j].name);
      });
  };

  render() {
    console.log(this.state.beerDatas);

    return (
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ x: "100vw", transition: { ease: "easeInOut" } }}
        transition={{ duration: 0.5 }}
      >
        <div className="homeBtn">
          <Link to="/">
            <img src="/images/button.png" alt="" />
          </Link>
        </div>
        <div className="detailWrapper">
          <div className="detailContainer">
            <div className="detailItemImg">
              <img src={this.state.image_url} alt="" />
            </div>
            <div className="detailContent">
              <h2 className="detailName">{this.state.beerName}</h2>
              <h4>{this.state.slogan} </h4>
              <p> {this.state.firstBrew}</p>
              <p>{this.state.attenuationLevel}</p>
              <p>{this.state.description}</p>
              <small>{this.state.contributer}</small>
            </div>
          </div>
          <div className="detailImage">
            <Contact />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default RandomBeer;
