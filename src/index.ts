import express, { Express, Response } from 'express';

const app: Express = express();

app.get('/version', (_, res: Response) => {
  res.send({ version: '0.0.1' });
});

app.listen(3000, () => process.stdout.write('Server running on http://localhost:3000'));
