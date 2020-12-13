import express, { Express, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.get('/', (_, res: Response) => {
  res.json({
    message: 'starting',
  });
});

app.get('/test', (_, res: Response) => {
  res.json({
    message: 'testing another routes',
  });
});

app.listen(PORT, () => {
  console.log('Listen on port: ' + PORT);
});
