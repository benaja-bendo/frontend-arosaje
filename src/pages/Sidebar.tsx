// Sidebar
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Sidebar.scss";


const Sidebar = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(true);


 // Fonction pour ouvrir ou fermer la sidebar en fonction de la taille de l'écran
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
         <img className="logo" src="./src/assets/home.png" alt="home" />
         <Link to="/">Accueil</Link>
       </li>
       <li className="sidebar-menu-item">
         <img className="logo" src="./src/assets/profil.png" alt="profil" />
         <Link to="/profil-user">Profil Utilisateur</Link>
       </li>
       <li className="sidebar-menu-item">
         <img className="logo" src="./src/assets/plante.png" alt="plante" />
         <Link to="/plants">Plantes</Link>
       </li>
     </ul>
   </div>
 );
};


export default Sidebar;


