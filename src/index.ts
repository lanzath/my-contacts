import express, { Express } from 'express';
import router from './routes';

const app: Express = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => process.stdout.write('Server running on http://localhost:3000'));
