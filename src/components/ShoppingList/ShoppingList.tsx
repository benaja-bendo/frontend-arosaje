import { FC } from 'react';
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

const ShoppingList: FC<ShoppingListProps> = ({ plantsData }) => {
   return (<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
     {plantsData?.map((plant, index) => (
         <PlantItem key={index} plantData={plant} />
         
      ))}
      
   </div>)
};



export default ShoppingList;
