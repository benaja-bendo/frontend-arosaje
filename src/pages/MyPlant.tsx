import {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";
import {useCurrentUser} from "@/hook/use-current-user.ts";
import {PlantType} from "@/types/plantType.ts";

export const MyPlant: FC = () => {
    return (
        <div className=" h-full"
             style={{padding: "18px"}}>
            <nav>
                <ul className="flex gap-1"
                    style={{borderRadius: "18px", border: "1px solid rgb(34, 197, 94)"}}>
                    <li>
                        <Link to="/profil-user"
                              className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                 viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
                            </svg>
                            <strong> Mes informations </strong>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-plantes"
                              className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                                viewBox="0 0 256 256">
                                <path fill="currentColor" 
                                    d="M247.63 39.89a8 8 0 0 0-7.52-7.52c-51.76-3-93.32 12.74-111.18 42.22c-11.8 19.49-11.78 43.16-.16 65.74a71.34 71.34 0 0 0-14.17 27L98.33 151c7.82-16.33 7.52-33.35-1-47.49c-13.2-21.79-43.67-33.47-81.5-31.25a8 8 0 0 0-7.52 7.52c-2.23 37.83 9.46 68.3 31.25 81.5A45.82 45.82 0 0 0 63.44 168A54.58 54.58 0 0 0 87 162.33l25 25V216a8 8 0 0 0 16 0v-29.49a55.61 55.61 0 0 1 12.27-35a73.91 73.91 0 0 0 33.31 8.4a60.9 60.9 0 0 0 31.83-8.86c29.48-17.84 45.26-59.4 42.22-111.16M47.81 147.6C32.47 138.31 23.79 116.32 24 88c28.32-.24 50.31 8.47 59.6 23.81c4.85 8 5.64 17.33 2.46 26.94l-24.41-24.41a8 8 0 0 0-11.31 11.31l24.41 24.41c-9.61 3.18-18.93 2.39-26.94-2.46m149.31-10.22c-13.4 8.11-29.15 8.73-45.15 2l53.69-53.7a8 8 0 0 0-11.31-11.31L140.65 128c-6.76-16-6.15-31.76 2-45.15c13.94-23 47-35.82 89.33-34.83c.96 42.32-11.84 75.42-34.86 89.36"/></svg>
                            <strong> Mes Plantes </strong>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="h-full">
                <ListOfPlant/>
            </div>
        </div>
    )
}

function ListOfPlant() {
    const {currentUser} = useCurrentUser();
    const [data, setData] = useState([] as PlantType[]);
    const handleFetch = async () => {
        if (!currentUser) return;
        const res = await HttpService.get(configRoutes.plants.me(parseInt(currentUser?.id))) as {data: {data: PlantType[]}};
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
                        <img src={_plant.path_image} alt={_plant.name} className="h-auto w-full"/>
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
                        </div>
                    </div>
                })}

            </div>
        </div>
    </>)
}