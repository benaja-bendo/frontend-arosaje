import HttpService from "@/services/HttpService.ts";
import {ResponseApi} from "@/types/ResponseApi.ts";
import config from "@/utils/config-app.ts";
import {ResponseGetMessages} from "@/types/ResponseGetMessages.ts";
import {ConversationType} from "@/types/ConversationType.ts";

interface MessageServiceProps {
    getConversation(): Promise<ConversationType[] | undefined>;
    sendMessage(content: string,conversation_id : number,sender_id:number): Promise<ResponseGetMessages | undefined>;
}

class MessageService implements MessageServiceProps {
    async getConversation(): Promise<ConversationType[] | undefined> {
        try {
            const response = await HttpService.get<ResponseApi<ConversationType[]>>(config.api.routes.conversations.getAll);
            if (response.status === 200) {
                return response.data.data;
            } else {
                console.error('Failed to get conversation');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async sendMessage(content: string,conversation_id : number,sender_id:number): Promise<ResponseGetMessages| undefined> {
        try {
            const response = await HttpService.post<ResponseApi<ResponseGetMessages>>(config.api.routes.conversations.sendMessage, {
                sender_id,
                conversation_id,
                content
            });
            if (response.status === 200) {
                return  response.data.data;
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new MessageService();