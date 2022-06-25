import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order';

class SendOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.body;
    const sendOrderService = new SendOrderService();
    const result = await sendOrderService.execute({ orderId });
    return res.json(result);
  }
}

export const sendOrderController = new SendOrderController();
