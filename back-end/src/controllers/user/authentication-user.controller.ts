import { Request, Response } from 'express';
import { AuthenticationUserService } from '../../services/user';

class AuthenticationUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const authenticationUserService = new AuthenticationUserService();

    const auth = await authenticationUserService.execute({ email, password });

    return res.json(auth);
  }
}

export const authenticationUserController = new AuthenticationUserController();
