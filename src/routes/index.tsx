import {
    createBrowserRouter, json, LoaderFunctionArgs, Outlet, redirect,
    RouteObject,
} from "react-router-dom";
import {Error404} from "../pages/Error404";
import UserProfilePage from "../pages/Profile/UserProfilePage";
import {ShowPlant} from "../pages/ShowPlant";
import Layout from "../Layout";
import {Home} from "../pages/Home";
import {loginAction, LoginPage} from "@/pages/login/loginPage.tsx";
import AuthService from "@/services/authService.ts";
import {ResponseThrow} from "@/types/ResponseThrow.ts";
import {AxiosError} from "axios";
import {Messagerie} from "@/pages/Messagerie.tsx";
import {registerAction, RegisterPage} from "@/pages/register/registerPage.tsx";


const routes: RouteObject[] = [
    {
        id: "main",
        path: "",
        loader: ({request}: LoaderFunctionArgs) => {
            if (!AuthService.isAuthenticated) {
                const params = new URLSearchParams();
                params.set("from", new URL(request.url).pathname);
                return redirect("/auth/login?" + params.toString());
            }
            return null;
        },
        element: <Layout/>,
        hasErrorBoundary: true,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/plantes/:id",
                Component: ShowPlant,
            },
            {
                path: "/profil-user",
                Component: UserProfilePage,
            },
            {
                path: "/messagerie",
                Component: Messagerie,
            }
        ],
    },
    {
        id: "auth",
        path: "/auth",
        element: <><Outlet/></>,
        loader: () => {
            if (AuthService.isAuthenticated) {
                return redirect("/");
            }
            return null;
        },
        children: [
            {
                path: 'login',
                element: <LoginPage/>,
                loader: () => {
                    if (AuthService.isAuthenticated) {
                        return redirect("/");
                    }
                    return null;
                },
                action: loginAction,
            },
            {
                path: 'register',
                element: <RegisterPage/>,
                action: registerAction,
            },
            {
                path: "logout",
                action: async () => {
                    try {
                        await AuthService.signout();
                        return redirect('/');
                    } catch (error) {
                        const err = error as AxiosError;
                        throw json<ResponseThrow>({
                            message: err.message,
                        }, 401);
                    }
                }
            },
        ],
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
 