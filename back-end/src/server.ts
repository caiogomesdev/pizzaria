import express, { Request, Response, NextFunction } from 'express';
import { resolve } from 'path';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use('/images', express.static(resolve(__dirname, '..', 'uploads')));
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: err.name,
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "Error",
    error: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!!!`));
