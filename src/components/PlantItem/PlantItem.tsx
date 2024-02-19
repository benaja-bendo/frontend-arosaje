import { FC } from 'react';
//import { PlantItemWrapper } from './PlantItem.styled';
//import CareScale from '../CareScale/CareScale';

interface PlantItemProps {
   plantData: {
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
   };
}

const PlantItem: FC<PlantItemProps> = ({ plantData }) => {
   return (
      <div className="w-full overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
         <img src={plantData.path_image} alt={plantData.name} className="h-auto w-full" />
         <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">{plantData.description}</p>
            {/*add other line */}
            <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Ajouter</button>
         </div>
      </div>
   )
};

export default PlantItem;


