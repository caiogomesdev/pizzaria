import { compare } from 'bcryptjs';
import { prismaClient } from "../../prisma";
import { UserNotFound } from './errors';

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

      return {
        acessToken: "qualquer",
        name: "qualquer",
        email: "qualquer2q2",
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
    acessToken: string;
    name: string;
    email: string;
  }
}
