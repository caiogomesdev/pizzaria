export class InvalidName extends Error {
  constructor() {
    super("Digite um nome válido");
    this.name = "InvalidName";
  }
}
