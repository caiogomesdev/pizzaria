

class CreateUserService {
  execute({
    name,
    email,
    password,
  }: ExecuteParams): ExecuteResponse {
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
