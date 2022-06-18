import { prismaClient } from '../../prisma'
import { isEmptyOrNull } from '../../validators'
import { AlreadyExistsUser, InvalidEmail, InvalidName, InvalidPassword } from './errors';

class CreateUserService {
  async execute({ name, email, password }: ExecuteParams): Promise<ExecuteResponse> {
    isEmptyOrNull(name, new InvalidName());
    isEmptyOrNull(email, new InvalidEmail());
    isEmptyOrNull(password, new InvalidPassword());

    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (user) {
      throw new AlreadyExistsUser();
    }

    return prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

}

type ExecuteParams = {
  name: string,
  email: string,
  password: string,
}

type ExecuteResponse = {
  name: string,
  email: string,
  password?: string,
}

export { CreateUserService };
