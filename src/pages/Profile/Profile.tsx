import {FC} from "react";
import {useCurrentUser} from "@/hook/use-current-user.ts";
import {useFetcher} from "react-router-dom";

export const Profile: FC = () => {
    const fetcher = useFetcher();
    const {currentUser} = useCurrentUser();
    return (
        <div className="h-full"
             style={{paddingTop: "10px"}}>

            <div className="block md:flex">

                <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md"
                     style={{borderRadius: "18px", border: "1px solid #e5e7eb"}}>
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold block">{currentUser?.name}</span>
                        {/*<a href="#"*/}
                        {/*   className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>*/}
                        <fetcher.Form method="post" action={`/auth/logout`}>
                            <button type={"submit"} style={{background: "#22c55e"}} className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                Sign out
                            </button>
                        </fetcher.Form>
                    </div>

                    {/*<span className="text-gray-600">This information is secret so be careful</span>*/}
                    <div className="w-full p-8 mx-2 flex justify-center">
                        <img id="showImage" className="max-w-xs w-32 items-center border rounded-lg shadow-lg"
                             src={currentUser?.profile_photo_path || "https://via.placeholder.com/150"}
                             alt=""/>
                    </div>
                </div>

                <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md"
                     style={{borderRadius: "18px", border: "1px solid #e5e7eb"}}>
                        <div className="pb-6">
                            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Nom</label>
                            <div className="flex">
                                {/*<input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full"*/}
                                {/*       type="email" value={currentUser?.name}/>*/}
                                <span className="border-1  rounded-r px-4 py-2 w-full">{currentUser?.name}</span>
                            </div>
                        </div>
                        <div className="pb-6">
                            <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email</label>
                            <div className="flex">
                                {/*<input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full"*/}
                                {/*       type="email" value={currentUser?.email}/>*/}
                                <span className="border-1  rounded-r px-4 py-2 w-full">{currentUser?.email}</span>
                            </div>
                        </div>
                </div>

            </div>

        </div>
    );
};
