import { Item } from '@prisma/client';
import { prismaClient } from '../../prisma';

export class RemoveItemService implements RemoveItem {
  execute({ itemId }: RemoveItem.Params): Promise<RemoveItem.Result> {
    return prismaClient.item.delete({
      where: {
        id: itemId,
      },
    });
  }
}

interface RemoveItem {
  execute(params: RemoveItem.Params): Promise<RemoveItem.Result>;
}

namespace RemoveItem {
  export type Params = {
    itemId: string;
  };
  export type Result = Item;
}
