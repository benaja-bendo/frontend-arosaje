export type MessageType ={
    id: number;
    sender_id: number;
    sender_name: string;
    content: string;
    createdAt: string;
}

export type ConversationType = {
    id: number;
    sender: string;
    sender_id: number;
    participant: string;
    participant_id: number;
    messages: MessageType[];
}