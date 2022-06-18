import { prismaClient } from '../../prisma'
import { isEmptyOrNull } from '../../validators'
import { InvalidName } from '../../validators/errors';

export class CreateCategoryService implements CreateCategory {
  async execute(params: CreateCategory.Params): Promise<CreateCategory.Result> {
    isEmptyOrNull(params.name, new InvalidName());
    const category = await prismaClient.category.findFirst({
      where: { name: params.name },
      select: { id: true, name: true }
    });

    if (category) {
      return category;
    }

    return prismaClient.category.create({
      data: { name: params.name, },
      select: { id: true, name: true, },
    });
  }
}

interface CreateCategory {
  execute(params: CreateCategory.Params): Promise<CreateCategory.Result>;
}

export namespace CreateCategory {
  export type Params = {
    name: string;
  }
  export type Result = {
    id: string;
    name: string;
  };
}
