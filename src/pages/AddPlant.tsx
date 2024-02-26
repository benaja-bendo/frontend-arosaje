import { FC } from 'react';
import { ActionFunctionArgs, Form, Navigate, useActionData } from "react-router-dom";
import { useCurrentUser } from "@/hook/use-current-user.ts";
import httpService from "@/services/HttpService.ts";
import configRoutes from "@/utils/config-routes.ts";

export const AddPlant: FC = () => {
    const { currentUser } = useCurrentUser();
    const data = useActionData() as { status?: number };
    if (data?.status !== undefined) return <Navigate to={'/my-plantes'} />
    return (
        <div style={{ position: 'relative' }}>
            <img className="logo1" src="./src/assets/fleur.jpg" alt="fleur" style={{ width: '100%', height: 'auto' }} />
            <Form method="post" action="/add-plant" className="flex flex-col gap-4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: "2rem", border: "1px solid #e5e7eb", borderRadius: "18px", backgroundColor: 'white', maxWidth: '400px' }} encType={"multipart/form-data"}>
                <div className="flex justify-center items-center h-full">
                    <h2 className={"text-2xl"}>
                        Créer une plante
                    </h2>
                </div>
                <div className="flex flex-col gap-3">
                    <input name={"user_created"} type="hidden" value={currentUser?.id} />
                    <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Nom de la plante:
                        <input
                            type="text"
                            name={"name"}
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                    </label>
                    <label>
                        Description de la plante:
                        <textarea
                            name={"description"}
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                            style={{ width: "100%" }} />
                    </label>
                    <label>
                    Periode souhaitée:
                    <input
                        name={"date_begin"} type="datetime-local"
                        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                    <input
                        name={"date_end"} type="datetime-local"
                        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                    </label>
                    <label>
                        Image de la plante:
                        <input
                            type="file"
                            accept={"image/*"}
                            name={"path_image"}
                            style={{ width: "100%" }}
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                    </label>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" style={{ width: "100%", background: "#22c55e", color: "#ffffff" }}>
                        Publier
                    </button>
                </div>
            </Form>
        </div>
    )
}

export const AddPlanAction = async ({ request }: ActionFunctionArgs) => {
    const body = await request.formData();
    const res = await httpService.post(configRoutes.plants.getAll, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log(res);
    return {
        status: 200,
        body: {
            message: 'Plante ajoutée avec succès'
        }
    }
}
