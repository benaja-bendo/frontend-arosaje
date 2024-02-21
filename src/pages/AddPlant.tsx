import React, {FC, useState} from 'react';

export const AddPlant: FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({name, description, image});
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <div className="flex justify-between items-center h-full">
                <h2 className={"text-2xl"}>
                    Créer une plante
                </h2>
            </div>
            <div className="flex flex-col gap-1">
                <label>
                    Nom de la plante:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <label>
                    Description de la plante:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <label>
                    Image de la plante:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Publier</button>
            </div>
        </form>
    )
}