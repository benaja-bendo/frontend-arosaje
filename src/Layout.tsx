// Layout.tsx
import React, { ReactNode } from "react";
import Sidebar from "./pages/Sidebar";
import "./Layout.scss";
import {Outlet} from "react-router-dom";

interface LayoutProps {
 children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
 return (
   <div className="layout">
     <Sidebar />
     <div className="content">
         <Outlet/>
     </div>
   </div>
 );
};

export default Layout;