import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product';

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, price, description, category_id } = req.body;

    if (!req.file) {
      throw new Error('Error upload file');
    }
    const { filename } = req.file

    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name,
      price,
      description,
      category_id,
      banner: filename,
    });
    return res.json(product);
  }
}

export const createProductController = new CreateProductController();
