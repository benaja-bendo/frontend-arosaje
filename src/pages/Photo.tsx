import React, {useRef} from 'react';
import Webcam from "react-webcam";
import { saveAs } from 'file-saver';

const videoConstraints = {
    // width: "100%",  // window.innerWidth,
    // height: "100%", // window.innerHeight,
    facingMode: "user"
};

export const Photo = () => {
    const webcamRef = useRef<Webcam | null>(null);

    const capture = React.useCallback(
        () => {
            if (!webcamRef.current) {
                return;
            }
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc); // Vous pouvez remplacer cette ligne par le code pour enregistrer ou afficher l'image
            // alert(`Image capturée, regardez la console pour voir le contenu de l'image`)
            // code pour enregistrer ou afficher l'image
            if (imageSrc) {
                saveImage(imageSrc).then(r => console.log(`Image saved ${r}`));
            }
        },
        [webcamRef]
    );
const saveImage = async (imageSrc: string) => {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    saveAs(blob, 'photo.jpeg');
}
    return (
        <>
            <div style={{position: "relative", width: "100%", height: "80vh"}}>
            <Webcam
                audio={false}
                // height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                // width={videoConstraints.width}
                videoConstraints={videoConstraints}
                // style={{position: "absolute", top: 0, left: 0}}
            />
            <button onClick={capture} className={"absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-2 rounded-full"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="white"
                          d="M20 7q-.425 0-.712-.288T19 6V5h-1q-.425 0-.712-.288T17 4t.288-.712T18 3h1V2q0-.425.288-.712T20 1t.713.288T21 2v1h1q.425 0 .713.288T23 4t-.288.713T22 5h-1v1q0 .425-.288.713T20 7m-9 10.5q1.875 0 3.188-1.312T15.5 13t-1.312-3.187T11 8.5T7.813 9.813T6.5 13t1.313 3.188T11 17.5m0-2q-1.05 0-1.775-.725T8.5 13t.725-1.775T11 10.5t1.775.725T13.5 13t-.725 1.775T11 15.5M3 21q-.825 0-1.412-.587T1 19V7q0-.825.588-1.412T3 5h3.15L7.4 3.65q.275-.3.663-.475T8.875 3H14q.425 0 .713.288T15 4v1.5q0 .625.438 1.063T16.5 7h.5v.5q0 .625.438 1.063T18.5 9H20q.425 0 .713.288T21 10v9q0 .825-.587 1.413T19 21z"/>
                </svg>
            </button>
            </div>
        </>
    );
};