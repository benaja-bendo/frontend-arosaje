import { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";
import { useCurrentUser } from "@/hook/use-current-user.ts";
import { PlantType } from "@/types/plantType.ts";

export const MyPlant: FC = () => {
    return (
        <div className=" h-full">
            <nav>
                <ul className="flex gap-1 pb-2 border-b-2">
                    <li>
                        <Link to="/profil-user"
                            className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
                            </svg>
                            <strong> Mes informations </strong>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-plantes"
                            className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <img className="logo" src="./src/assets/plante.png" alt="plante" />
                            <strong> Mes Plantes </strong>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="h-full">
                <ListOfPlant />
            </div>
        </div>
    )
}

function ListOfPlant() {
    const { currentUser } = useCurrentUser();
    const [data, setData] = useState([] as PlantType[]);
    const handleFetch = async () => {
        if (!currentUser) return;
        const res = await HttpService.get(configRoutes.plants.me(parseInt(currentUser?.id))) as { data: { data: PlantType[] } };
        setData(res.data.data);
    }
    useEffect(() => {
        handleFetch().then(r => r);
    }, [currentUser]);
    return (<>
        <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-between items-center h-full">
                <h2 className={"text-2xl"}>
                    Mes plantes
                </h2>
                <Link to={'/add-plant'} className={"bg-green-500 text-white p-2 rounded-lg transition duration-300"}>
                    Ajouter une plante
                </Link>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                {data && data.map((_plant: PlantType, index: number) => {
                    return <div key={index}
                        className="w-full overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                        <img src={_plant.path_image} alt={_plant.name} className="h-auto w-full" />
                        <div className="p-5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold dark:text-black">{_plant.name}</h2>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-medium text-gray-300">Publisher by</p>
                                <p className="text-medium text-gray-700">{_plant.created_at}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-medium text-gray-300">Period</p>
                                <p className="text-medium text-gray-700 flex flex-col">
                                    <strong className="text-medium text-gray-700">{_plant.date_begin}</strong>
                                    <strong className="text-medium text-gray-700">{_plant.date_end}</strong>
                                </p>
                            </div>
                            <button onClick={async () => {
                                if (!confirm("Voulez-vous vraiment supprimer cette plante ?")) return;
                                const res = await HttpService.delete(configRoutes.plants.delete(_plant.id));
                                if (res.status === 200) {
                                    handleFetch().then(r => r);
                                }

                            }} className="w-full block text-center rounded-md bg-red-600  py-2 text-indigo-100 hover:bg-red-500 hover:shadow-md duration-75"
                            >supprimer</button>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </>)
}