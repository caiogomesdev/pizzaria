import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order';

class ListOrderController {
  async handle(_req: Request, res: Response): Promise<Response> {
    const listOrderService = new ListOrderService();
    const result = await listOrderService.execute();
    return res.json(result);
  }
}
export const listOrderController = new ListOrderController();
