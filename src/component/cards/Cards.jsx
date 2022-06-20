import React from "react";
import "./Cards.scss";

const Cards = (props) => {
  const { name, image, abv, description } = props;

  return (
    <div className="card__name">
      <img className="card__image" src={image} alt=""/>
      <h3>{name}</h3>
      <h4>{abv}</h4>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Cards;


