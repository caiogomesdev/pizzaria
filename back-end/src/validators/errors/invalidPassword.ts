export class InvalidPassword extends Error {
  constructor() {
    super("Digite uma senha válida");
    this.name = "InvalidPassword";
  }
}
