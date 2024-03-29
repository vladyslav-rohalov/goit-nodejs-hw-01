import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';
import { program } from 'commander';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

program
  .option('-a, --action <name>', 'choose action')
  .option('-i, --id <id>', 'user id')
  .option('-n, --name <name>', 'user name')
  .option('-e, --email <email>', 'user email')
  .option('-p, --phone <phone>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      await listContacts();
      break;

    case 'get':
      await getContactById(id);
      break;

    case 'add':
      await addContact(name, email, phone);
      break;

    case 'remove':
      await removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
