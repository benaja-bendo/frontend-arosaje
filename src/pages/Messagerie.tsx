import {FC, useEffect, useState} from "react";
import {Form, useActionData, useLoaderData} from "react-router-dom";
import {ConversationType, MessageType} from "@/types/ConversationType.ts";
import {useCurrentUser} from "@/hook/use-current-user.ts";
import MessageService from "@/services/MessageService.ts";


export const Messagerie: FC = () => {
    const {
        currentUser
    } = useCurrentUser();
    const {conversation} = useLoaderData() as { conversation: ConversationType[] };
    const loadAction = useActionData() as { success: boolean } | undefined;
    const [allConversations, setAllConversations] = useState<ConversationType[]>(conversation);
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(conversation[0]?.id);
    const [currentConversation, setCurrentConversation] = useState<MessageType[] | null>(conversation[0]?.messages);
    const [message, setMessage] = useState<string>('');

    const getFirstLetters = (text: string) => {
        return text.substring(0, 2).toUpperCase();
    };

    useEffect(() => {
        if (loadAction?.success) {
            MessageService.getConversation().then((res) => {
                if (res !== undefined) {
                    setAllConversations(res);
                    setSelectedConversationId(res[0]?.id);
                    setCurrentConversation(res[0]?.messages);
                    setMessage('');
                }
            });
        }
    }, [loadAction]);

    return (<>
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">

                <div className="flex flex-col flex-auto h-full p-3">
                    {/* Conversation Liste*/}
                    <div className="flex w-full space-x-4 my-2 px-2">
                        {allConversations.map((conv, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                style={{background: "#22c55e"}}
                                onClick={() => {
                                    setSelectedConversationId(conv.id);
                                    setCurrentConversation(conv.messages);
                                }}
                            >
                                {getFirstLetters(Number(conv.participant_id) === Number(currentUser?.id) ? conv.sender : conv.participant)}
                            </button>)
                        )}

                    </div>

                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-3 pb-16">
                        {/* Header conversation*/}
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid-cols-12 gap-y-2">
                                    {/*Listes messages*/}
                                    {
                                        currentConversation?.map((message, index) => {
                                            if (!currentUser) return null;
                                            if (message.sender_id === Number(currentUser.id)) {
                                                return (
                                                    <div key={index} className="col-start-6 col-end-13 p-3 rounded-lg">
                                                        <div
                                                            className="flex items-center justify-start flex-row-reverse">
                                                            <div
                                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                                style={{background: "#22c55e"}}>
                                                                {getFirstLetters(message.sender_name)}
                                                            </div>
                                                            <div
                                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                                                <div>
                                                                    {message.content}
                                                                </div>
                                                                <div
                                                                    className="absolute text-xs w-fit text-gray-500 right-0 -bottom-4">
                                                                    {message.createdAt}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            }
                                            return (
                                                <div key={index}
                                                     className="col-start-1 col-end-8 p-3 rounded-lg">
                                                    <div className="flex flex-row items-center">
                                                        <div
                                                            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                            style={{background: "#22c55e"}}>
                                                            {getFirstLetters(message.sender_name)}
                                                        </div>
                                                        <div
                                                            className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                        >
                                                            <div>
                                                                {message.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>);
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Input message*/}
                        <Form method={'POST'} replace={true}
                              className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                            <input type={'hidden'} name={'conversation_id'} value={selectedConversationId || ''}/>
                            <input type={'hidden'} name={'sender_id'} value={currentUser?.id || ''}/>
                            <div>
                                <button
                                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name={'content'}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Message..."
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                    />
                                    <button
                                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                                        type={"submit"}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                    style={{background: "#22c55e"}}>
                                    <span>Send</span>
                                    <span className="ml-2">
                                      <svg
                                          className="w-4 h-4 transform rotate-45 -mt-px"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                      </svg>
                                    </span>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </>);
};
