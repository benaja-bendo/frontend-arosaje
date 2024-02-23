import {FC, useState} from 'react';
import PlantItem from '../PlantItem/PlantItem';

interface ShoppingListProps {
    plantsData: {
        id: number,
        name: string,
        description: string,
        path_image: string,
        user_created: number,
        date_begin: string,
        date_end: string,
        is_published: number,
        created_at: string,
        updated_at: string
    }[];
}

const ShoppingList: FC<ShoppingListProps> = ({plantsData}) => {
   const [data, setData] = useState(plantsData);
    const handleChange = (e: any) => {
        const filteredData = plantsData.filter((plant) => {
            return plant.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setData(filteredData);
    }
    return (<>
        <div className="flex items-center">
            <input
                type="search"
                placeholder="Rechercher..."
                onChange={handleChange}
                className="mb-5 w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline border"
            />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 grid-rows-1">
            {data?.map((plant, index) => (
                <PlantItem key={index} plantData={plant}/>

            ))}
        </div>
    </>)
};


export default ShoppingList;
