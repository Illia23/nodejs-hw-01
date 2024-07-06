import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const countContacts = async () => {
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
    const contacts = await countContacts();
    const numberOfContacts = contacts.length;
        console.log('number', numberOfContacts);
};
main();
