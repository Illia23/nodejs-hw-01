import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const removeLastContact = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        let allContacts = [];
            if (data) {
                allContacts = JSON.parse(data);
            }
        if (allContacts.length >= 1) {
            allContacts.pop();
        } else {
            console.log('you cannot delete');
        }
        await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2), 'utf-8');

    } catch (error) {
        console.log('error', error);
    }
};

removeLastContact();
