import { Item, Order, Product } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class DetailOrderService implements DetailOrder {
  async execute({ orderId }: DetailOrder.Params): Promise<DetailOrder.Result> {
    return prismaClient.item.findMany({
      where: { order_id: orderId },
      include: {
        product: true,
        order: true,
      },
    });
  }
}

interface DetailOrder {
  execute(params: DetailOrder.Params): Promise<DetailOrder.Result>;
}

namespace DetailOrder {
  export type Params = {
    orderId: string;
  };
  export type Result = (Item & {
    product: Product;
    order: Order;
  })[];
}
