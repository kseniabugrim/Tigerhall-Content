import React from "react";
import "./Card.css";
import cardImg from "../../assets/img/card-img.jpeg";

function Card(props) {
  
  const { 
    cardImage,
    cardCategory, 
    cardName,
    expertName,
    expertTitle,
    expertCompany,
  } = props;

  return (
    <div className="card">
      <div className="card-img__wrapper">
        <img src={cardImage} alt="" />
      </div>
      <div className="card-info">
        <p className="card-info__category">{cardCategory}</p>
        <p className="card-info__name">{cardName}</p>
        <p className="card-info__expert-name">{expertName}</p>
        <p className="card-info__expert-title">{expertTitle}</p>
        <p className="card-info__expert-company">{expertCompany}</p>
      </div>
    </div>
  );
}

export default Card;
