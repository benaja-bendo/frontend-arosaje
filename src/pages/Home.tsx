import { FC } from 'react';
import { Link } from 'react-router-dom';


const Home: FC = () => {
 const plantList = [
   { id: '1', name: 'Plante A' },
   { id: '2', name: 'Plante B' },
 ];


 return (
   <div>
     <h1>Liste des plantes</h1>
     <ul>
       {plantList.map(plant => (
         <li key={plant.id}>
           <Link to={`/profile/${plant.id}`}>{plant.name}</Link>
         </li>
       ))}
     </ul>
   </div>
 );
};


export default Home;
