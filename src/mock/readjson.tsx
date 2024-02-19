import * as fs from 'fs';
export function readJson( path: string ) {

    fs.readFile(path, 'utf8', (err: any, data: string) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier :", err);
            return;
        }

        try {
            // Parsing du fichier JSON
            const objetJson = JSON.parse(data);

            // Utilisation de l'objet JSON (remplacez cette partie avec ce que vous devez faire)
            console.log("Contenu du fichier JSON :", objetJson);
        } catch (erreur) {
            console.error("Erreur lors du parsing du fichier JSON :", erreur);
        }
    });
}