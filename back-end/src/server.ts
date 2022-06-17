import express, { Request, Response } from "express";
import 'express-async-errors'

import { router } from './routes'

const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: err.name,
      error: err.message
    })
  }
  return res.status(500).json({
    status: 'Error',
    error: 'Internal Server Error'
  })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!!!`));
