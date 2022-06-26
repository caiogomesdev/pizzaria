import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order';

class FinishOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.body;
    const finishOrderService = new FinishOrderService();
    const result = await finishOrderService.execute({ orderId });
    return res.json(result);
  }
}

export const finishOrderController = new FinishOrderController();
