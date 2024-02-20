// Sidebar
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import "./Sidebar.scss";
import {useCurrentUser} from "@/hook/use-current-user.ts";


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const {currentUser} = useCurrentUser();


    useEffect(() => {
        const handleResize = () => {
            const toggleButton = document.querySelector('.toggle-button');
            if (window.innerWidth <= 600) {
                toggleButton?.classList.add('hide-toggle-button');
            } else {
                toggleButton?.classList.remove('hide-toggle-button');
            }
        };


        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isSidebarOpen ? 'Fermer' : 'Ouvrir'}
            </button>
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <Link to="/" className="flex items-center">
                        <img className="logo" src="./src/assets/home.png" alt="home"/>
                        <strong>Accueil</strong>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link to="/profil-user" className="flex items-center">
                        <img className="logo" src="./src/assets/profil.png" alt="profil"/>
                        <strong> {currentUser?.name} </strong>
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Sidebar;


