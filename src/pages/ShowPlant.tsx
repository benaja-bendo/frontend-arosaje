import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../assets/style.css";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";

export const ShowPlant: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [plant, setPlant] = useState(null);
    console.log('data', plant)

    useEffect(() => {
        LoadShowPlant(parseInt(id || '0', 10)).then(r => setPlant(r.data.data));
    }, [id]);
    const LoadShowPlant = async (id: number) => await HttpService.get(configRoutes.plants.show(id));


    return (
        <div className="container">
            {plant && <div className="gauche">
                <img src={plant.path_image} alt={plant.name}/>
                <h2>{plant.name}</h2>
                <p>{plant.description}</p>
                <button>Contacter</button>
            </div>}
            {/*<div className="gauche">*/}
            {/*    <img src={plant} alt={plant.name}/>*/}
            {/*</div>*/}

            {/*<div className="droite">*/}
            {/*    <h2>{plant.name}</h2>*/}
            {/*    <p>{plant.description}</p>*/}
            {/*    <button>Contacter</button>*/}
            {/*</div>*/}


        </div>
    );
};

