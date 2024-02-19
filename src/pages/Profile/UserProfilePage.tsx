import { UserProfile } from "./Profile";


const UserProfilePage = () => {
 // Exemple de données d'utilisateur
 const user = {
   firstName: "John",
   age: 30,
   occupation: "Software Engineer",
   isBotanist: true,
   needsPlantCare: true,
   profilePicture: "https://example.com/profile.jpg",
 };


 return (
   <div>
     <UserProfile {...user} />
   </div>
 );
};


export default UserProfilePage; // Exportez UserProfilePage par défaut
