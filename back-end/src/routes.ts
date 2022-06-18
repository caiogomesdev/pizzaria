import { Router } from 'express'
import { createUserController, authenticationUserController, detailUserController } from "./controllers/user";
import { createCategoryController, listCategoryController } from "./controllers/category";
import { isAuthenticated } from "./middlewares";
import { createProductController } from './controllers/product';

const router = Router();

router.post('/users', createUserController.handle);
router.post('/session', authenticationUserController.handle);
router.get('/me', isAuthenticated, detailUserController.handle);

router.post("/category", isAuthenticated, createCategoryController.handle);
router.get("/category", isAuthenticated, listCategoryController.handle);

router.post("/product", isAuthenticated, createProductController.handle);


export { router };
