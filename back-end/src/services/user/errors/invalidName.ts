export class InvalidName extends Error {
  constructor() {
    super("Nome inválido");
    this.name = "InvalidName";
  }
}
