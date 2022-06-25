import { PrismaPromise, Product } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class ListByCategoryService implements ListByCategory {
execute({
    categoryId,
  }: ListByCategory.Params): PrismaPromise<ListByCategory.Result> {
    return prismaClient.product.findMany({
      where: { category_id: categoryId }
    });
  }
}

interface ListByCategory {
  execute(params: ListByCategory.Params): PrismaPromise<ListByCategory.Result>;
}

namespace ListByCategory {
  export type Params = {
    categoryId: string;
  }
  export type Result = Product[];
}
