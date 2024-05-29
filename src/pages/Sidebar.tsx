// Sidebar
import {Link} from "react-router-dom";
import {useEffect} from "react";
import "./Sidebar.scss";
import {useCurrentUser} from "@/hook/use-current-user.ts";


const Sidebar = () => {
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


    return (
        <div className="sidebar">
            <button className="toggle-button">
            </button>
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <Link to="/" className="flex items-center" style={{gap: "10px"}}>
                        <img className="logo" style={{width: "28px"}} src="./src/assets/home.svg" alt="home"/>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link to="/profil-user" className="flex items-center" style={{gap: "10px"}}>
                        <img className="logo" style={{width: "32 px"}} src="./src/assets/profile.svg" alt="profil"/>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link to="/photo" className="flex items-center" style={{gap: "10px"}}>
                        <img className="logo" src="./src/assets/photo.svg" alt="photo"/>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link to="/messagerie" className="flex items-center" style={{gap: "10px"}}>
                        <img className="logo" src="./src/assets/mail.svg" alt="messagerie"/>
                    </Link>
                </li>
                <li className="sidebar-menu-item">
                    <Link to="/faq" className="flex items-center" style={{gap: "10px"}}>
                        <img className="logo" src="./src/assets/faqq.svg" alt="faq"/>
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Sidebar;