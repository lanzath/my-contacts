import { Router, Response } from 'express';
import ContactController from './app/controllers/ContactController';

const router: Router = Router();

router.get('/version', (_, res: Response) => res.send({ version: '0.0.1' }));
router.get('/contacts', ContactController.index);
router.post('/contacts', ContactController.store);
router.get('/contacts/:id', ContactController.show);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

export default router;
