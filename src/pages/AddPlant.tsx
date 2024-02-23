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
        <Form method="post" action="/add-plant" className="flex flex-col gap-4 p-4" encType={"multipart/form-data"}>
            <div className="flex justify-between items-center h-full">
                <h2 className={"text-2xl"}>
                    Créer une plante
                </h2>
            </div>
            <div className="flex flex-col gap-1">
                <input name={"user_created"} type="hidden" value={currentUser?.id} />
                <label>
                    Nom de la plante:
                    <input
                        type="text"
                        name={"name"}
                        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <label>
                    Description de la plante:
                    <textarea
                        name={"description"}
                        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <label>
                    Image de la plante:
                    <input
                        type="file"
                        accept={"image/*"}
                        name={"path_image"}
                        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Publier
                </button>
            </div>
        </Form>
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