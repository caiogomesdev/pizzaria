import { Order } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class CreateOrderService implements CreateOrder {
  execute({ name, table }: CreateOrder.Params): Promise<CreateOrder.Result> {
    return prismaClient.order.create({
      data: {
        table,
        name,
      },
    });
  }
}

export interface CreateOrder {
  execute(Params: CreateOrder.Params): Promise<CreateOrder.Result>;
}

export namespace CreateOrder {
  export type Params = {
    table: number;
    name: string;
  };
  export type Result = Order;
}
