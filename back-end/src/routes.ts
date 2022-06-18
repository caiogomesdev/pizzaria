import { Router } from 'express'
import { createUserController, authenticationUserController, detailUserController } from "./controllers/user";
import { isAuthenticated } from "./middlewares";

const router = Router();

router.post('/users', createUserController.handle);
router.post('/session', authenticationUserController.handle);
router.get("/me", isAuthenticated, detailUserController.handle);

export { router };
