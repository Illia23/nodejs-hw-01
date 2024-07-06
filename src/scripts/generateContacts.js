import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++){
        contacts.push(createFakeContact());
    }
    return contacts;

};

const saveContacts = async (path, contacts) => {
    try {
        await fs.writeFile(path, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log('Contacts saved');
    } catch (error) {
        console.log('error', error);
    }
};


generateContacts(5)
    .then(data => {
        console.log('data', data);
        saveContacts(PATH_DB, data);
    } )
    .catch(error => console.error(error));





