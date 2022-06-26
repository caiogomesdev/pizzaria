import { Order } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class FinishOrderService implements FinishOrder {
  execute({ orderId }: FinishOrder.Params): Promise<FinishOrder.Result> {
    return prismaClient.order.update({
      where: { id: orderId },
      data: { status: true },
    });
  }
}

interface FinishOrder {
  execute(params: FinishOrder.Params): Promise<FinishOrder.Result>;
}

namespace FinishOrder {
  export type Params = {
    orderId: string;
  };
  export type Result = Order;
}
