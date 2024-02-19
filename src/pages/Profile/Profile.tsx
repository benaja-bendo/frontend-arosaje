import { FC } from "react";


interface UserProfileProps {
 firstName: string;
 age: number;
 occupation: string;
 isBotanist: boolean;
 needsPlantCare: boolean;
 profilePicture?: string;
}


export const UserProfile: FC<UserProfileProps> = ({
 firstName,
 age,
 occupation,
 isBotanist,
 needsPlantCare,
}) => {
 return (
   <div className="grid place-items-center">
     <h1 className="text-2xl font-bold mb-2">{firstName}</h1>
     <p>Age: {age}</p>
     <p>Occupation: {occupation}</p>
     <p>{isBotanist ? "Botanist" : "Plant Owner"}</p>
     {needsPlantCare && <p>Needs plant care</p>}
   </div>
 );
};
