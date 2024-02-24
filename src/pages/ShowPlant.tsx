import {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";
import {useCurrentUser} from "@/hook/use-current-user.ts";

export const ShowPlant: FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {currentUser} = useCurrentUser();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        LoadShowPlant(parseInt(id || '0', 10)).then(r => setPlant(r.data.data));
    }, [id]);
    const LoadShowPlant = async (id: number) => await HttpService.get(configRoutes.plants.show(id));

    const handleContact = async () => {
        alert('Contactez le propriétaire pour garder la plante');
        if (!currentUser) {
            alert('Vous devez être connecté pour contacter le propriétaire');
            return;
        }
        const res = await HttpService.post(configRoutes.demand.create(parseInt(id || '0', 10)), {
            user_id: currentUser.id,
            plant_id: parseInt(id || '0', 10)
        });
        if (res.status === 200) {
            navigate('/messagerie');
        }
    }
    return (<>
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
                    <div className="flex justify-between items-center"
                         style={{gap: "30px"}}>
                        <p className="text-medium text-gray-300">Address</p>
                        <p className="text-medium text-gray-700 flex flex-col">
                            <strong className="text-medium text-gray-700">{plant.address}</strong>
                        </p>
                    </div>
                    <hr className="my-8"/>
                    <h2 className="text-2xl font-bold text-gray-800 py-2.5">Conseils d'entretiens</h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {plant.care_tips && plant.care_tips.map((tip, index) => (
                            <li key={index}>{tip.content}</li>
                        ))}
                    </ul>
                    <button onClick={handleContact} type={"button"}
                            className="w-full mt-8 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            style={{background: "#0d4b24", color: "#ffffff"}}>
                        Contacter pour garder
                    </button>
                </div>
            </div>}
        </div>
    </>);
};

