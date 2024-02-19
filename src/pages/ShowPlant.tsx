import { FC } from "react";
import { useParams } from "react-router-dom";
import "../assets/style.css";
import plantes from '../ressources/plantes.json';

export const ShowPlant: FC = () => {
  const { id } = useParams<{ id: string }>();

    console.log('id', id)

  const plante = plantes.find(p => p.id === parseInt(id || '0', 10));

  return (
    <div className="container">

      <div className="gauche">
        <img src={plante.image} alt={plante.titre}/>
      </div>

      <div className="droite">
        <h2>{plante.titre}</h2>
        <p>{plante.adresse}</p>
        <p>{plante.details}</p>  
        <button>Contacter</button>
      </div>


    </div>
  );
};
