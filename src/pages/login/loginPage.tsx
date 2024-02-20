import {FC} from "react";
import {ActionFunctionArgs, Form, json, redirect} from "react-router-dom";
import AuthService from "@/services/authService.ts";
import {AxiosError} from "axios";
import {ResponseThrow} from "@/types/ResponseThrow.ts";

export const LoginPage: FC = () => {
    return (<>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Arosage</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <Form method="post" replace className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="text" name="email"
                               defaultValue={"richard@example.com"}
                               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input type="text" name="password"
                               defaultValue={"password"}
                               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                        <button type="submit"
                                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </button>
                    </Form>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button
                                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                         viewBox="0 0 24 24" className="w-4 h-4 inline-block align-text-top">
                                        <path fill="currentColor"
                                              d="M18 14v-3h-3V9h3V6h2v3h3v2h-3v3zm-9-2q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"></path>
                                    </svg>
                                    <span className="inline-block ml-1">Create Account</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right  whitespace-nowrap">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

interface FormDataValues {
    email: string | null;
    password: string | null;
    redirectTo: string | null;
}

export const loginAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const {password, redirectTo, email}: FormDataValues = {
        email: formData.get("email") as string | null,
        password: formData.get("password") as string | null,
        redirectTo: formData.get("redirectTo") as string | null,
    };
    // Validate the form data.
    if (!email || !password) {
        return {
            error: "You must provide a email to log in",
        };
    }
    // Sign in and redirect to the proper destination if successful.
    try {
        await AuthService.signin(email, password);
    } catch (error) {
        const err = error as AxiosError;
        throw json<ResponseThrow>({
            message: err.message,
        }, 401);
    }
    return redirect(redirectTo || "/");
}
