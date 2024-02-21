import { FC } from 'react';
import {Link} from "react-router-dom";
//import { PlantItemWrapper } from './PlantItem.styled';
//import CareScale from '../CareScale/CareScale';

interface PlantItemProps {
   plantData: {
      id: number,
      name: string,
      description: string,
      path_image: string,
      user_created: number,
      user_created_name: string,
      date_begin: string,
      date_end: string,
      is_published: number,
      created_at: string,
      updated_at: string
   };
}

const PlantItem: FC<PlantItemProps> = ({ plantData }) => {
   return (
      <div className="w-full overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
         <img src={plantData.path_image} alt={plantData.name} className="h-auto w-full" />
         <div className="p-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold dark:text-black">{plantData.name}</h2>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-medium text-gray-300">Publisher by</p>
                <p className="text-medium text-gray-700">{plantData.user_created_name}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-medium text-gray-300">Period</p>
                <p className="text-medium text-gray-700 flex flex-col">
                    <strong className="text-medium text-gray-700">{plantData.date_begin}</strong>
                    <strong className="text-medium text-gray-700">{plantData.date_end}</strong>
                </p>
            </div>
            <Link to={`/plantes/${plantData.id}`} className="w-full block text-center rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">voir</Link>
         </div>
      </div>
   )
};

export default PlantItem;


