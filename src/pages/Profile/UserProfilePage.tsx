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
                            <svg className="logo" xmlns="http://www.w3.org/2000/svg" height="800px" width="800px" viewBox="0 0 17.481 17.481">
                                <path fill="currentColor" d="M17.471,2.073c-0.564-0.122-1.063-0.167-1.543-0.188C15.448,1.86,15,1.876,14.563,1.903
                                    c-0.867,0.065-1.66,0.216-2.393,0.439c-1.466,0.443-2.708,1.152-3.778,2.063C7.323,5.317,6.421,6.427,5.745,7.803
                                    c-0.34,0.687-0.62,1.443-0.826,2.286c-0.098,0.428-0.188,0.864-0.243,1.343c-0.045,0.366-0.077,0.747-0.078,1.164
                                    c-0.08,0.043-0.16,0.092-0.238,0.145c0,0-2.711,1.528-3.962,1.563c-1.251,0.031,0.88,0.755,0.521,1.249
                                    c-0.279,0.385,2.277-1.363,3.817-2.548c0.002,0,0.004,0,0.006,0.002C9.592,9.6,14.928,4.396,14.928,4.396s-5.965,7.766-9.078,8.753
                                    c0.098,0.006,0.196,0.011,0.292,0.016c0.481,0.025,0.928,0.008,1.365-0.021c0.865-0.065,1.658-0.219,2.39-0.44
                                    c1.468-0.441,2.711-1.149,3.786-2.055c1.075-0.907,1.977-2.016,2.654-3.39c0.341-0.685,0.618-1.443,0.825-2.288
                                    c0.099-0.427,0.188-0.865,0.241-1.345C17.463,3.149,17.499,2.65,17.471,2.073z"/>
                            </svg>
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
