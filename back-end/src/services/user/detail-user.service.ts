import { prismaClient } from '../../prisma'

export class DetailUserService implements DetailUser {
  async execute(params: DetailUser.Params): Promise<DetailUser.Result> {

    return prismaClient.user.findFirst({
      where: {
        id: params.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}

interface DetailUser {
  execute(params: DetailUser.Params): Promise<DetailUser.Result>;
}

namespace DetailUser {
  export type Params = {
    id: string;
  }

  export type Result = {
    id: string,
    name: string,
    email: string,
  } | null;
}
