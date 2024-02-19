import { FC } from "react";
import Banner from "../components/Banner/Banner";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Category from "../components/Category/Category";
import Footer from "../components/Footer/Footer";


export const Home: FC = () => {
   const {data} =JSON.parse('{"success": true,"message": "Plants retrieved successfully.","data": [{"id": 1,"name": "Mandy Hudson Sr.","description": "Quos ut assumenda totam ex omnis fuga sit voluptas. Eos est facilis inventore dicta. Qui non dolores beatae laborum asperiores qui.","path_image": "https://via.placeholder.com/640x480.png/005511?text=ut","user_created": 4,"date_begin": "1992-11-22","date_end": "1979-07-01","is_published": 1,"created_at": "2024-02-18T12:11:46.000000Z","updated_at": "2024-02-18T12:11:46.000000Z"}]}') 
    return <div >
        <Banner />
        <div >
            <div className="flex flex-col ">

                <Category/>
                {data && <ShoppingList plantsData= {data}
                 />}
            </div>
        </div>
        <Footer />
    </div>;
};
