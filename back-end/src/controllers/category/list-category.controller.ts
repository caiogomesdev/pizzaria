import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category';

export class ListCategoryController {
  async handle(_req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    const categories = await listCategoryService.execute();
    return res.json(categories);
  }
}

export const listCategoryController = new ListCategoryController();
