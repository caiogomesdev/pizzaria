import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order';

class RemoveItemController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { itemId } = req.params;
    const removeItemService = new RemoveItemService();
    const result = await removeItemService.execute({ itemId });
    return res.json(result);
  }
}

export const removeItemController = new RemoveItemController();
