import {Profile} from "./Profile";
import {Link} from "react-router-dom";


const UserProfilePage = () => {
    return (
        <div className="grid h-full"
             style={{padding: "18px"}}>
            <nav>
                <ul className="flex gap-1"
                    style={{borderRadius: "18px", border: "1px solid #22c55e"}}>
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
                    <Link to="/my-plantes"
                              className="flex items-center hover:bg-green-500 hover:text-white p-2 rounded-lg transition duration-300">
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                                viewBox="0 0 256 256">
                                <path fill="currentColor" 
                                    d="M247.63 39.89a8 8 0 0 0-7.52-7.52c-51.76-3-93.32 12.74-111.18 42.22c-11.8 19.49-11.78 43.16-.16 65.74a71.34 71.34 0 0 0-14.17 27L98.33 151c7.82-16.33 7.52-33.35-1-47.49c-13.2-21.79-43.67-33.47-81.5-31.25a8 8 0 0 0-7.52 7.52c-2.23 37.83 9.46 68.3 31.25 81.5A45.82 45.82 0 0 0 63.44 168A54.58 54.58 0 0 0 87 162.33l25 25V216a8 8 0 0 0 16 0v-29.49a55.61 55.61 0 0 1 12.27-35a73.91 73.91 0 0 0 33.31 8.4a60.9 60.9 0 0 0 31.83-8.86c29.48-17.84 45.26-59.4 42.22-111.16M47.81 147.6C32.47 138.31 23.79 116.32 24 88c28.32-.24 50.31 8.47 59.6 23.81c4.85 8 5.64 17.33 2.46 26.94l-24.41-24.41a8 8 0 0 0-11.31 11.31l24.41 24.41c-9.61 3.18-18.93 2.39-26.94-2.46m149.31-10.22c-13.4 8.11-29.15 8.73-45.15 2l53.69-53.7a8 8 0 0 0-11.31-11.31L140.65 128c-6.76-16-6.15-31.76 2-45.15c13.94-23 47-35.82 89.33-34.83c.96 42.32-11.84 75.42-34.86 89.36"/></svg>
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
