import axios from "axios";

export class sendCommentaire {

    static async sendinformation(option:{email: string, commentaire:string}){

        try{
            const response = await axios.post('https://bf0f-83-142-150-170.ngrok-free.app/api/newsletter',{
            email: option.email,
            comment: option.commentaire
        })
        console.log(response);

        }catch(e){
            console.log(e);
        }
        
    }
}