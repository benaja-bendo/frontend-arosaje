import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { ShowPlant } from "../pages/ShowPlant";


const routes: RouteObject[] = [
   {
        path: "/",
        element: <p>Richard</p>,
   },
   {
    path: "/plantes/:id",
    element: <ShowPlant/>,
    },
    {
        path: "*",
        element: <Error404/>,
    },
];

export const Router = createBrowserRouter(routes, {
    // basename: "/",
    // window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}