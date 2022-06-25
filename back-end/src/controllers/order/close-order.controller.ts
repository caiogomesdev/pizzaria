import { Request, Response } from 'express';
import { CloseOrderService } from '../../services/order';

class CloseOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    console.log('Entrou');
    const { orderId } = req.params;
    console.log(orderId);
    const closeOrderService = new CloseOrderService();
    const result = await closeOrderService.execute({ orderId });
    return res.json(result);
  }
}

export const closeOrderController = new CloseOrderController();
