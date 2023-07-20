import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogementData from "../../Datas/logementData.json";
import LogementInfos from "../../components/LogementInfos/LogementInfos";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
  const { id } = useParams();
  const CurrentLogement = LogementData.find((acc) => acc.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (CurrentLogement === undefined) {
      navigate("/404");
    }
  }, [CurrentLogement, navigate]);

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
        <LogementInfos title={title} location={location} tags={tags} host={host} rating={rating}/>
        <div className="logement_collapses">
          <Collapse collapseTitle="Description" collapseText={description} />
          <Collapse collapseTitle="Equipement" collapseText={equipments} />
        </div>
      </main>
    );
  }

  return null; // Retourne null si le logement n'est pas trouvé ou en cours de chargement
}

export default Logement;