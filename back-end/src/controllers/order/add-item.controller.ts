import { Request, Response } from 'express';
import { AddItemService } from '../../services/order';

class AddItemController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId, productId, amount } = req.body;
    const addItemService = new AddItemService();
    const result = await addItemService.execute({ orderId, productId, amount });
    return res.status(201).json(result);
  }
}

export const addItemController = new AddItemController();
