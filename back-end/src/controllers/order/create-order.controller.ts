import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order';

class CreateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, table } = req.body;
    const createOrderService = new CreateOrderService();
    const result = await createOrderService.execute({ name, table });
    return res.status(201).json(result);
  }
}

export const createOrderController = new CreateOrderController();
