import {FC} from "react";
import {ActionFunctionArgs, Form, json, Link, redirect} from "react-router-dom";
import AuthService from "@/services/authService.ts";
import {AxiosError} from "axios";
import {ResponseThrow} from "@/types/ResponseThrow.ts";

export const RegisterPage: FC = () => {
    return (<>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Arosage</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <Form method="post" replace className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">NOM</label>
                        <input type="text" name="name"
                               className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="text" name="email"
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
                        <div className="">
                            <div className="text-center">
                                <Link to={'/auth/login'}
                                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <span className="inline-block ml-1">Login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

interface FormDataValues {
    name: string | null;
    email: string | null;
    password: string | null;
    redirectTo: string | null;
}

export const registerAction = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const {password, redirectTo, email, name}: FormDataValues = {
        email: formData.get("email") as string | null,
        password: formData.get("password") as string | null,
        redirectTo: formData.get("redirectTo") as string | null,
        name: formData.get("name") as string | null,
    };
    // Validate the form data.
    if (!email || !password || !name) {
        return {
            error: "You must provide a email to log in",
        };
    }try {
        await AuthService.register(email, password, name);
    } catch (error) {
        const err = error as AxiosError;
        throw json<ResponseThrow>({
            message: err.message,
        }, 401);
    }
    return redirect(redirectTo || "/");
}
