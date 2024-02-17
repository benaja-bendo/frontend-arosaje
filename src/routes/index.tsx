import {
    createBrowserRouter,
    RouteObject,
 } from "react-router-dom";
 import { Error404 } from "../pages/Error404";
 import UserProfilePage from "../pages/Profile/UserProfilePage";
 import Layout from "../Layout";
 
 const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout><p></p></Layout>,
    },
    {
        path: "*",
        element: <Layout><Error404/></Layout>,
    },
    {
        path: "/profil-user",
        element: <Layout><UserProfilePage/></Layout>,
    }
 ];
 
 export const Router = createBrowserRouter(routes, {
    // basename: "/",
    // window,
 });
 
 if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
 }
 