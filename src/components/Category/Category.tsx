import { FC } from 'react';


interface CategoryProps {

}

const Category: FC<CategoryProps> = () => (
 
    <div className="category flex items-center">
      {/* Filtre par type de plante */}
      <select>
        <option value="interieur">Intérieur</option>
        <option value="exterieur">Extérieur</option>
      </select>
      
      {/* Bouton Réinitialiser */}
      <button>Réinitialiser</button>
    </div>
 
);

export default Category;
