import { Request, Response } from 'express';
import { ListByCategoryService } from '../../services/product';

class ListByCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const categoryId = req.query.categoryId as string;
    const listByCategory = new ListByCategoryService();
    const result = await listByCategory.execute({ categoryId });
    return res.json(result);
  }
}

export const listByCategoryController = new ListByCategoryController();
