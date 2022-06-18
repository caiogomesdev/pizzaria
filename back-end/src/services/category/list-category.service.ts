import { PrismaPromise } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class ListCategoryService implements ListCategory {
  execute(): PrismaPromise<ListCategoy.Result> {
    return prismaClient.category.findMany({ select: { id: true, name: true } });
  }
}

interface ListCategory {
  execute(): PrismaPromise<ListCategoy.Result>;
}

export namespace ListCategoy {
  export type Result =
    {
      id: string;
      name: string;
    }[]
  ;
}
