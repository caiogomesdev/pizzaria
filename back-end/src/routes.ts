import { Router } from 'express'

const router = Router()

router.get('/teste', (_req, res) => {
  res.json({ hello: 'Hello' });
});

export { router };
