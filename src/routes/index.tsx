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
import {MyPlant} from "@/pages/MyPlant.tsx";
import {AddPlanAction, AddPlant} from "@/pages/AddPlant.tsx";
import {Faq} from "@/pages/Faq.tsx";
import {Photo} from "@/pages/Photo.tsx";
import MessageService from "@/services/MessageService.ts";


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
                path: "/photo",
                Component: Photo,
            },
            {
                path: "/my-plantes",
                Component: MyPlant,
            },
            {
                path: "/add-plant",
                Component: AddPlant,
                action: AddPlanAction,
            },
            {
                path: "/profil-user",
                Component: UserProfilePage,
            },
            {
                path: "/messagerie",
                Component: Messagerie,
                loader: async () => {
                    if (!AuthService.isAuthenticated) {
                        return redirect("/auth/login");
                    }
                    const conversation = await MessageService.getConversation();
                    return {
                        conversation,
                    };
                },
                action: async ({request}: LoaderFunctionArgs) => {
                    const formData = await request.formData();
                    const {content, conversation_id, sender_id} = {
                        content: formData.get("content") as string,
                        conversation_id: formData.get("conversation_id") as string,
                        sender_id: formData.get("sender_id") as string,
                    };
                    if (!content) {
                        return {
                            error: "You must provide a message to send",
                        };
                    }

                    await MessageService.sendMessage(content, Number(conversation_id), Number(sender_id));
                    return json({success: true});
                }
            },
            {
                path: "/faq",
                Component: Faq,
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
 