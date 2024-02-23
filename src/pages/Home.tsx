import {FC, useEffect, useState} from "react";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Category from "../components/Category/Category";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";


export const Home: FC = () => {
const [data, setData] = useState(null);
    const handleFetch = async () => {
        const res = await HttpService.get(configRoutes.plants.getAll);
        setData(res.data.data);
    }
    useEffect(() => {
        handleFetch().then(r => r);
    }, []);
    return (<>
            <div className="flex flex-col ">
                <div className="p-3">
                    <h1 className="text-5xl font-bold text-center">Arosage</h1>

                </div>
                <div className="p-3">
                {data && <ShoppingList plantsData= {data}/>}
                </div>
            </div>
    </>);
};
