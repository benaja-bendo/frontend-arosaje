import {Profile} from "./Profile";
import {Link} from "react-router-dom";


const UserProfilePage = () => {
    return (
        <div className="grid h-full">
            <nav>
                <ul className="flex gap-1 pb-2 border-b-2">
                    <li>
                        <Link to="/profil-user" className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>
                            </svg>
                            <strong> Mes informations </strong>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-plantes" className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <img className="logo" src="./src/assets/plante.png" alt="plante"/>
                            <strong> Mes Plantes </strong>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Profile />
        </div>
    );
};


export default UserProfilePage;
