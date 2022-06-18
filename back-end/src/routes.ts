import multer from 'multer';
import { Router } from 'express'
import uploadConfig from './configs/multer';
import { isAuthenticated } from './middlewares';
import { createUserController, authenticationUserController, detailUserController } from './controllers/user';
import { createCategoryController, listCategoryController } from './controllers/category';
import { createProductController } from './controllers/product';

const router = Router();
const upload = multer(uploadConfig.upload('uploads'))

router.post('/users', createUserController.handle);
router.post('/session', authenticationUserController.handle);
router.get('/me', isAuthenticated, detailUserController.handle);

router.post("/category", isAuthenticated, createCategoryController.handle);
router.get("/category", isAuthenticated, listCategoryController.handle);

router.post("/product", isAuthenticated, upload.single('file'), createProductController.handle);


export { router };
