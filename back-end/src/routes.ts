import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './configs/multer';
import { isAuthenticated } from './middlewares';
import {
  createUserController,
  authenticationUserController,
  detailUserController,
} from './controllers/user';
import {
  createCategoryController,
  listCategoryController,
} from './controllers/category';
import {
  createProductController,
  listByCategoryController,
} from './controllers/product';
import {
  createOrderController,
  closeOrderController,
  addItemController,
  removeItemController,
} from './controllers/order';

const router = Router();
const upload = multer(uploadConfig.upload('uploads'));

router.post('/users', createUserController.handle);
router.post('/session', authenticationUserController.handle);
router.get('/me', isAuthenticated, detailUserController.handle);

router.post('/category', isAuthenticated, createCategoryController.handle);
router.get('/category', isAuthenticated, listCategoryController.handle);

router.post(
  '/product',
  isAuthenticated,
  upload.single('file'),
  createProductController.handle
);
router.get(
  '/category/product',
  isAuthenticated,
  listByCategoryController.handle
);

router.post('/order', isAuthenticated, createOrderController.handle);
router.post('/order/item', isAuthenticated, addItemController.handle);
router.delete('/order/:orderId', isAuthenticated, closeOrderController.handle);
router.delete(
  '/order/item/:itemId',
  isAuthenticated,
  removeItemController.handle
);

export { router };
