import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ src, text, label, path }) {
  return (
    <div className="card">
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
