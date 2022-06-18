import { prismaClient } from '../../prisma';

export class CreateProductService implements CreateProduct {
  execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: CreateProduct.Params): Promise<CreateProduct.Result> {
    return prismaClient.product.create({
      data: { name, price, description, banner, category_id },
      select: {
        name: true,
        price: true,
        description: true,
        banner: true,
        category_id: true,
      },
    });
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

  export type Result = Params;
}
