import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "./Contact";

function Detail(props) {
  const { id } = useParams();

  const [beerInfo, setInfo] = useState("Jo");
  useEffect(() => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      const beerData = response.data.filter((elt) => id === elt._id);
      setInfo(beerData);
      console.log(beerData);
    });
  }, []);

  const imgUrls = [
    "https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/2795270/pexels-photo-2795270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/5530170/pexels-photo-5530170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];
  let i = imgUrls[Math.floor(Math.random() * 4)];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
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
            <img src={beerInfo[0].image_url} alt="" />
          </div>
          <div className="detailContent">
            <h2 className="detailName">{beerInfo[0].name}</h2>
            <h4>{beerInfo[0].tagline} </h4>
            <p> {beerInfo[0].first_brewed}</p>
            <p>{beerInfo[0].attenuation_level}</p>
            <p>{beerInfo[0].description}</p>
            <small>{beerInfo[0].contributed_by}</small>
          </div>
        </div>
        <div className="detailImage">
          <Contact />
        </div>
      </div>
    </motion.div>
  );
}

export default Detail;
