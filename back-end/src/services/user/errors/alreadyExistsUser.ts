export class AlreadyExistsUser extends Error {
  constructor() {
    super('Usuário já existente');
    this.name = "AlreadyExistsUser";
  }
}
