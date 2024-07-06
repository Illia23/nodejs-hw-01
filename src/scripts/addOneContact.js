import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const contact = [];
    contact.push(createFakeContact());
    return contact;
};




const addContact = async (path, contact) => {
    try {
        let data = await fs.readFile(path, 'utf-8');
        let allContacts = [];
        if (data) {
            allContacts = JSON.parse(data);
        }
        allContacts.push(...contact);

        await fs.writeFile(path, JSON.stringify(allContacts, null, 2), 'utf-8');

    } catch (error) {
        console.log('error', error);
    }
};

addOneContact()
    .then(data => {
        console.log('data', data);
        addContact(PATH_DB, data);
    } )
    .catch(error => console.error(error));
