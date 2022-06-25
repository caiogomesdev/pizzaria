import { Request, Response } from 'express';
import { CloseOrderService } from '../../services/order';

class CloseOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;
    const closeOrderService = new CloseOrderService();
    const result = await closeOrderService.execute({ orderId });
    return res.json(result);
  }
}

export const closeOrderController = new CloseOrderController();
