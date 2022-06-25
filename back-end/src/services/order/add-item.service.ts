import { prismaClient } from '../../prisma';

export class AddItemService implements AddItem {
  execute({
    orderId,
    productId,
    amount,
  }: AddItem.Params): Promise<AddItem.Result> {
    return prismaClient.item.create({
      data: {
        order_id: orderId,
        product_id: productId,
        amount,
      },
    });
  }
}

interface AddItem {
  execute(params: AddItem.Params): Promise<AddItem.Result>;
}

namespace AddItem {
  export type Params = {
    orderId: string;
    productId: string;
    amount: number;
  };
  export type Result = Item;
}
