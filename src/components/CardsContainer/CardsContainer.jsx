import React from "react";
import Cards from "../Cards/Cards";
import data from "../../Datas/logementList.json";

function CardsContainer() {
  const logementData = data; 
  if (!Array.isArray(logementData)) { 
      console.error("Les données de logement ne sont pas au bon format.");
      return null; 
  }
  return (
      <article className='home__logement'>
          {logementData.map((logement) => (
              <Cards key={logement.id} cover={logement.cover} title={logement.title} id={logement.id}/>
             ))}
      </article>
  )
}

export default CardsContainer;