import React from "react";
import "./Cards.css";
import CardItem from "./carditem/CardItem";
import Image1 from "../../images/img-9.jpg";
import Image2 from "../../images/img-8.jpg";
import Image3 from "../../images/img-7.jpg";
import Image4 from "../../images/img-6.jpg";
import Image5 from "../../images/img-5.jpg";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these Amazing Offers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image1}
              text="Explore the waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Image2}
              text="Travel through the Islands of Bali in a private cruise "
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={Image4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={Image5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
