import { FC } from 'react';


interface CategoryProps {

}

const Category: FC<CategoryProps> = () => (
<div className="flex items-center">
  <input
  type="search"
  placeholder="Rechercher..."
  onChange={(e) => console.log(e.target.value)}
  className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline border"
/>
</div>
);

export default Category;
