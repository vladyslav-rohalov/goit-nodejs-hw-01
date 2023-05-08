import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('./db/contacts.json');

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parsedData = JSON.parse(data);
    console.table(parsedData);
  } catch (error) {
    console.error(error);
  }
}

export async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parsedData = JSON.parse(data);
    const searchedContact = parsedData.find(item => item.id === contactId);
    console.table(searchedContact);
  } catch (error) {
    console.table(error);
  }
}

export async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parsedData = JSON.parse(data);
    const newData = parsedData.filter(contact => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newData), 'utf8');
    console.log(`Contact with id: ${contactId} was deleted`);
  } catch (error) {
    console.error(error);
  }
}

export async function addContact(name, email, phone) {
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const parsedData = JSON.parse(data);
    parsedData.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(parsedData), 'utf8');
    console.table(newContact);
  } catch (error) {
    console.error(error);
  }
}
