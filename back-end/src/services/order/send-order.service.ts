import { prismaClient } from '../../prisma';

export class SendOrderService implements SendOrder {
  execute({ orderId }: SendOrder.Params): Promise<SendOrder.Result> {
    return prismaClient.order.update({
      where: { id: orderId },
      data: { draft: false },
    });
  }
}

interface SendOrder {
  execute(params: SendOrder.Params): Promise<SendOrder.Result>;
}

namespace SendOrder {
  export type Params = {
    orderId: string;
  };
  export type Result = {};
}
