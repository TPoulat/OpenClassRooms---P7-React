import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LogementData from "../../Datas/logementData.json";
import LogementInfos from "../../components/LogementInfos/LogementInfos";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Error from "../Error/Error"

function Logement() {
  const { id } = useParams();
  const CurrentLogement = LogementData.find((acc) => acc.id === id);
  const [logementFound, setLogementFound] = useState(true); 

  useEffect(() => {
    if (!CurrentLogement) {
      setLogementFound(false); 
    }
  }, [CurrentLogement]);

  if (logementFound) {    
    if (CurrentLogement) {
      const {
        title,
        location,
        pictures,
        host,
        rating,
        tags,
        description,
        equipments,
      } = CurrentLogement;

      return (
        <main className="logement">
          <Carrousel pictures={pictures} />
          <LogementInfos
            title={title}
            location={location}
            tags={tags}
            host={host}
            rating={rating}
          />
          <div className="logement_collapses">
            <Collapse collapseTitle="Description" collapseText={description} />
            <Collapse collapseTitle="Equipement" collapseText={equipments} />
          </div>
        </main>
      );
    } 
  } else {
    return <Error />;
  }
}

export default Logement;