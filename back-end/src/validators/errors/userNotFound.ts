export class UserNotFound extends Error {
  constructor() {
    super('Usuário não foi encontrado');
    this.name = "UserNotFound";
  }
}
