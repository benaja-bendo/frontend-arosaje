import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import { Error404 } from "../pages/Error404";
import {Home}  from "../pages/Home";

const routes: RouteObject[] = [
   {
        path: "/",
        element: <Home />,
   },
    {
        path: "*",
        element: <Error404/>,
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