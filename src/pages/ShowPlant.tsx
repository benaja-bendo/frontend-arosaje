import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";

export const ShowPlant: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        LoadShowPlant(parseInt(id || '0', 10)).then(r => setPlant(r.data.data));
    }, [id]);
    const LoadShowPlant = async (id: number) => await HttpService.get(configRoutes.plants.show(id));


    return (<>
        {/*<div className="">*/}
        {/*    {plant && <div className="m-8">*/}
        {/*        <div>*/}
        {/*            <img className="float-left" src={plant.path_image} alt={plant.name}/>*/}
        {/*        </div>*/}

        {/*        <div className="">*/}
        {/*            <h2 className="text-5xl font-extrabold dark:text-black">{plant.name}</h2>*/}
        {/*            <p className="m-8">{plant.description}</p>*/}
        {/*            <a href="../messagerie"*/}
        {/*               className="-mt-2 text-md font-bold text-white bg-black rounded-full px-5 py-2">Contacter</a>*/}
        {/*        </div>*/}

        {/*    </div>}*/}
        {/*</div>*/}
        <div className="container mx-auto">
            {plant && <div className="flex flex-col md:flex-row p-8 gap-8">
                <div className="flex-1">
                    <img className="w-full h-auto object-cover rounded-lg" src={plant.path_image} alt={plant.name}/>
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 ">{plant.name}</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{plant.description}</p>
                    <hr className="my-8"/>
                    <div className="flex justify-between items-center">
                        <p className="text-medium text-gray-300">Publisher by</p>
                        <p className="text-medium text-gray-700">{plant.user_created_name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-medium text-gray-300">Period</p>
                        <p className="text-medium text-gray-700 flex flex-col">
                            <strong className="text-medium text-gray-700">{plant.date_begin}</strong>
                            <strong className="text-medium text-gray-700">{plant.date_end}</strong>
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-medium text-gray-300">Address</p>
                        <p className="text-medium text-gray-700 flex flex-col">
                            <strong className="text-medium text-gray-700">{plant.address}</strong>
                        </p>
                    </div>
                    <hr className="my-8"/>
                    <h2 className="text-2xl font-bold text-gray-800 py-2.5">Care tips</h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {plant.care_tips && plant.care_tips.map((tip, index) => (
                            <li key={index}>{tip.content}</li>
                        ))}
                    </ul>
                    <a href="../messagerie"
                       className="w-full mt-8 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                        Contacter pour garder
                    </a>
                </div>
            </div>}
        </div>
    </>);
};

