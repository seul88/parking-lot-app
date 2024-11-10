import { DocumentStore, IAuthOptions } from "ravendb";
import { Parking } from "@/app/db/models";
import fs from 'fs';

const url = process.env.RAVENDB_URL as string;
const database = process.env.RAVENDB_DATABASE as string;
const path = process.env.RAVENDB_CERT_PATH as string;

const authOptions: IAuthOptions = {
    certificate: fs.readFileSync(path),
    type: 'pem',
};

const store = new DocumentStore(url, database);
store.authOptions = authOptions;

store.conventions.findCollectionName = 
    constructorOrTypeChecker => {
        if (constructorOrTypeChecker === Parking) {
            return "Parkings";
        }
    return constructorOrTypeChecker.name;
}

store.initialize();
export { store };