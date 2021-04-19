import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <motion.div
        // initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
        transition={{ duration: 0.5 }}
      >
        <div className="homeWrapper">
          <div className="heroBackground"></div>

          <div className="home-center-img">
            <img
              src="https://bierverpackungkaufen.de/wp-content/uploads/2018/03/vd_grolsch4xbeugel.png"
              alt=""
            />
          </div>
          <h3 className="checkOut">Check out our Sortiments!</h3>
          <Link to="/allbeer" className="allbeerBtn">
            {`>> To Beerlist`}
          </Link>
          {/* <h3 className="checkOut">Cant decide? Here's beer of the week</h3>
          <Link to={`/allbeer/beer/ `} className="beerWeekBtn">
            {`>> Beer of Week`}
          </Link> */}
          <Carousel />
        </div>
      </motion.div>
    );
  }
}

export default Home;
