import { compare } from 'bcryptjs';
import { prismaClient } from '../../prisma';
import { UserNotFound } from './errors';
import { sign } from 'jsonwebtoken';

export class AuthenticationUserService implements AuthenticationUser {
  async execute(
    params: AuthenticationUser.Params
  ): Promise<AuthenticationUser.Result> {

    const user = await prismaClient.user.findFirst({
      where: {
        email: params.email,
      }
    })

    if (!user) {
      throw new UserNotFound();
    }

    const correctPassword = await compare(params.password, user.password);

    if (!correctPassword) {
      throw new UserNotFound();
    }

    const acessToken = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_JWT || "123",
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      acessToken,
    };
  }
}

export interface AuthenticationUser {
  execute(params: AuthenticationUser.Params): Promise<AuthenticationUser.Result>;
}

export namespace AuthenticationUser {
  export type Params = {
    email: string;
    password: string;
  }

  export type Result = {
    id: string;
    name: string;
    email: string;
    acessToken: string;
  }
}
