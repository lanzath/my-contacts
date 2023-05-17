import { Request, Response } from 'express';
import ContactRepository from '../repositories/ContactRepository';
import IContact from '../interfaces/IContact';

class ContactController {
  async index(req: Request, res: Response): Promise<void> {
    const contacts = await ContactRepository.findAll();

    res.status(200).send(contacts);
  }

  async show(req: Request, res: Response): Promise<Response<any, Record<string, any>>
  | IContact | undefined> {
    const { id } = req.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error404: 'Not Found' });
    }

    res.status(200).json(contact);
  }

  async store(req: Request, res: Response): Promise<Response<any, Record<string, any>>
  | IContact | undefined> {
    const { name, email } = req.body;

    if (!name) return res.status(400).send({ error: 'Nome obrigatório' });

    const contactExists = await ContactRepository.findByEmail(email);
    if (contactExists) return res.status(400).send({ error: 'Email já cadastrado' });

    await ContactRepository.store(req.body);

    res.sendStatus(201);
  }

  update(): void {

  }

  async delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>
  | IContact | undefined> {
    const { id } = req.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error404: 'Not Found' });
    }

    await ContactRepository.delete(id);

    res.sendStatus(204);
  }
}

// Singleton pattern, a single instance of class for whole application
export default new ContactController();
