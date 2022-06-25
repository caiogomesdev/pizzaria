import { Order } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class ListOrderService implements ListOrder {
  execute(): Promise<ListOrder.Result> {
    return prismaClient.order.findMany({
      where: { draft: false, status: false },
      orderBy: { created_at: 'desc' },
      take: 10,
    });
  }
}

interface ListOrder {
  execute(): Promise<ListOrder.Result>;
}

namespace ListOrder {
  export type Result = Order[];
}
