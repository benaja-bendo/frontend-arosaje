import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {Error404} from "../pages/Error404";
import UserProfilePage from "../pages/Profile/UserProfilePage";
import {ShowPlant} from "../pages/ShowPlant";
import Layout from "../Layout";
import {Home} from "../pages/Home";
import { Messagerie } from "../pages/messagerie";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout><Home/></Layout>,
    },
    {
        path: "*",
        element: <Layout><Error404/></Layout>,
    },
    {
        path: "/plantes/:id",
        element: <Layout><ShowPlant/></Layout>,
    },
    {
        path: "/profil-user",
        element: <Layout><UserProfilePage/></Layout>,
    },
    {
        path: "/messagerie",
        element: <Layout><Messagerie/></Layout>,
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
 