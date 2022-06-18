import { prismaClient } from '../../prisma';

export class CreateProductService implements CreateProduct {
  execute({ name, price, description, banner, category_id }: CreateProduct.Params): Promise<CreateProduct.Result> {
    return Promise.resolve({ ok: true})
  }
}

interface CreateProduct {
  execute(params: CreateProduct.Params): Promise<CreateProduct.Result>;
}

namespace CreateProduct {
  export type Params = {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
  }

  export type Result = {
    ok: boolean;
  }
}
