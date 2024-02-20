import {FC} from "react";
import {useCurrentUser} from "@/hook/use-current-user.ts";

export const Profile: FC = () => {
    const {currentUser} = useCurrentUser();
    return (
        <div className="h-full">

            <div className="border-b-2 block md:flex">

                <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                    <div className="flex justify-between">
                        <span className="text-xl font-semibold block">{currentUser?.name}</span>
                        <a href="#"
                           className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
                        <button onClick={() => {
                            console.log('edit')
                        }}
                           className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</button>
                    </div>

                    <span className="text-gray-600">This information is secret so be careful</span>
                    <div className="w-full p-8 mx-2 flex justify-center">
                        <img id="showImage" className="max-w-xs w-32 items-center border rounded-lg shadow-lg"
                             src={currentUser?.profile_photo_path || "https://via.placeholder.com/150"}
                             alt=""/>
                    </div>
                </div>

                <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                    <div className="rounded  shadow p-6">
                        <div className="pb-6">
                            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Nom</label>
                            <div className="flex">
                                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full"
                                       type="email" value={currentUser?.name}/>
                            </div>
                        </div>
                        <div className="pb-6">
                            <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email</label>
                            <div className="flex">
                                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full"
                                       type="email" value={currentUser?.email}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
