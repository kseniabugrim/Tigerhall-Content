import React from "react";
import Card from "../../components/Card/Card";
import Spinner from '../Spinner/Spinner';
import "./CardsWrapper.css";

import { IMAGE_REG_EXP } from "../../constants/RegExp";

function CardsWrapper({ cardsList, loading, isSearching }) {

  if(loading || isSearching) {
    return (
      <div className="loadingWrapper">
        <Spinner isSearching={isSearching} />
      </div>
    );
  }

  return (
    <div className="cards-wrapper">
      { 
        cardsList && cardsList.map((card, index) => {
          const cardExpertsName = card.experts[0].firstName + card.experts[0].lastName;
          const domen = card.image.uri.match(IMAGE_REG_EXP)[0]
          const cardImage = domen + `resize/${342}x/` + card.image.uri.slice(domen.length);

          return <Card 
            key={index}
            cardImage={cardImage}
            cardCategory={card.categories[0].name}
            cardName={card.name} 
            expertName={cardExpertsName}
            expertTitle={card.experts[0].title}
            expertCompany={card.experts[0].company}
          />
        })
      }
    </div>
  );
}
export default CardsWrapper;
