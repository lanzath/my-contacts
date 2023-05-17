import { v4 } from 'uuid';
import IContact from '../interfaces/IContact';

// Temporary mock
let contacts: IContact[] = [
  {
    id: v4(),
    name: 'Lanza',
    email: 'lanzathm@gmail.com',
    age: 30,
    categoryId: v4(),
  },
];

class ContactRepository {
  findAll(): Promise<IContact[]> {
    return new Promise((resolve) => resolve(contacts));
  }

  store(contact: IContact): Promise<string> {
    contact.id = v4();

    contacts.push(contact);

    return new Promise((resolve) => resolve(contact.id));
  }

  findById(id: string): Promise<IContact | undefined> {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  update(id: string, contact: IContact) {
    throw new Error('Not implemented exception');
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email: string): Promise<boolean> {
    return new Promise((resolve) => resolve(!!contacts.find((contact) => contact.email === email)));
  }
}

export default new ContactRepository();
