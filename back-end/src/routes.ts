import { Router } from 'express'
import { createUserController, authenticationUserController } from "./controllers/user";

const router = Router();

router.post('/users', createUserController.handle);
router.post('/session', authenticationUserController.handle);

export { router };
