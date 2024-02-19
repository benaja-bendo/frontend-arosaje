// Layout.tsx
import React, { ReactNode } from "react";
import Sidebar from "./pages/Sidebar";
import "./Layout.scss";

interface LayoutProps {
 children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 return (
   <div className="layout">
     <Sidebar />
     <div className="content">{children}</div>
   </div>
 );
};

export default Layout;