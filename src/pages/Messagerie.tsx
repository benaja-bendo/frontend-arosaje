import { FC, useState } from "react";

interface Contact {
  id: number;
  name: string;
}

export const Messagerie: FC = () => {
  const [contacts] = useState<Contact[]>([
    { id: 1, name: "Anouar" },
    { id: 2, name: "Amjad" },
    { id: 3, name: "Abdellah" },
    { id: 4, name: "Akram" },
  ]);

  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleContactClick = (contactId: number) => {
    setSelectedContactId(contactId);
  };

  const handleSendMessage = () => {
    if (selectedContactId !== null && currentMessage.trim() !== "") {
      setSelectedContactId(null);
      setCurrentMessage("");
    }
  };

  return (
    <div className="m-8 grid grid-cols-2 gap-4 place-content-center h-48">
      <div className="border-2 border-black">
        <h2 className="text-2xl font-bold dark:text-black">Messages</h2>
        <div>
          <ul>
            {contacts.map((contact) => (
              <li
                className="cursor-pointer p-2 hover:bg-green-500"
                key={contact.id}
                onClick={() => handleContactClick(contact.id)} >
                {contact.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4">
        <div className="flex-1 flex items-center justify-center">
          {selectedContactId ? (
            <p>Conversation with {contacts.find((c) => c.id === selectedContactId)?.name}</p>
          ) : (
            <p>Select a contact to start a conversation.</p>
          )}
        </div>
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white p-2 rounded"
          onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
