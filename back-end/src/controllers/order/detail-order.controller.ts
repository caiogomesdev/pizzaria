import { Request, Response } from 'express';
import { DetailOrderService } from '../../services/order';

class DetailOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;
    const detailOrderService = new DetailOrderService();
    const result = await detailOrderService.execute({ orderId });
    return res.json(result);
  }
}

export const detailOrderController = new DetailOrderController();
