import { prismaClient } from '../../prisma';

export class CloseOrderService implements CloseOrder {
  execute({ orderId }: CloseOrder.Params): Promise<CloseOrder.Result> {
    return prismaClient.order.delete({
      where: { id: orderId },
      select: {
        id: true,
        table: true,
        status: true,
        name: true,
      },
    });
  }
}

interface CloseOrder {
  execute(params: CloseOrder.Params): Promise<CloseOrder.Result>;
}

namespace CloseOrder {
  export type Params = {
    orderId: string;
  };
  export type Result = {
    id: string;
    name: string | null;
    table: number;
    status: boolean;
  };
}
