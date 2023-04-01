import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';
import yargs from 'yargs';

// listContacts();
// getContactById('AeHIrLTr6JkxGE6SN-0Rw');
// removeContact('rsKkOQUi80UsgVPCcLZZW');
// addContact('Homer Simpson', 'homer@gmail.com', '(112) 909-2343');

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(yargs.argv);
