import {FC, useEffect, useState} from "react";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Category from "../components/Category/Category";
import HttpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";


export const Home: FC = () => {
const [data, setData] = useState(null);
    const handlefecth = async () => {
        const res = await HttpService.get(configRoutes.plants.getAll);
        setData(res.data.data);
    }
    useEffect(() => {
        handlefecth().then(r => r);
    }, []);
    return (<>
            <div className="flex flex-col ">
                <Category/>
                {data && <ShoppingList plantsData= {data}/>}
            </div>
    </>);
};
