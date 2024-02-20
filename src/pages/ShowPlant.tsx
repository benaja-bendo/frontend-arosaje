import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
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
        <div className="">
            {plant && <div className="m-8">
                <div>
                    <img className="float-left" src={plant.path_image} alt={plant.name}/>
                </div>
                
                <div className="">
                    <h2 className="text-5xl font-extrabold dark:text-black">{plant.name}</h2>
                    <p className="m-8">{plant.description}</p>
                    <a href="../messagerie" className="-mt-2 text-md font-bold text-white bg-black rounded-full px-5 py-2">Contacter</a>

                </div>
                

        </div>}
          


        </div>
    );
};

