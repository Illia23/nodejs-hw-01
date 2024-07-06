import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const removeAllContacts = async () => {
    try {
        const deleteAllContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(deleteAllContacts), 'utf-8');
    } catch (error) {
        console.log('error', error);
    }

};

removeAllContacts();
