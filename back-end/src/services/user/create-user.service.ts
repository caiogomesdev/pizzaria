import { prismaClient } from '../../prisma'
import { isEmptyOrNull } from '../../validators'
import { InvalidEmail, InvalidName, InvalidPassword } from './errors';

class CreateUserService {
  execute({
    name,
    email,
    password,
  }: ExecuteParams): ExecuteResponse {
    isEmptyOrNull(name, new InvalidName());
    isEmptyOrNull(email, new InvalidEmail());
    isEmptyOrNull(password, new InvalidPassword());

    return { name, email, password };
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
  password: string,
}

export { CreateUserService };
