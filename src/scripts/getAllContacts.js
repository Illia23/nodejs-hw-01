import { PATH_DB } from '../constants/contacts.js';
    import * as fs from 'node:fs/promises';

    export const getAllContacts = async () => {
        try {
            let data = await fs.readFile(PATH_DB, 'utf-8');
            let allContacts = [];
            if (data) {
                allContacts = JSON.parse(data);
            }
            return allContacts;
        } catch (error) {
            console.log('error', error);
            return [];
        }

    };


const main = async () => {
        const contacts = await getAllContacts();
        console.log('contacts', contacts);
};
main();
