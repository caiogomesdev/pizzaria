import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user'

class DetailUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const detailUserSerivce = new DetailUserService();

    const { user_id } = req;

    const user = await detailUserSerivce.execute({ id: user_id as string });

    return res.json(user);
  }
}

export const detailUserController = new DetailUserController();
