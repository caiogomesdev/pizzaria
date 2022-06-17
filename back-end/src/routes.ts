import { Router } from 'express'
import { createUserController } from "./controllers/user";
const router = Router()

router.post('/users', createUserController.handle);

export { router };
