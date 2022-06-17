export class InvalidEmail extends Error {
  constructor() {
    super('Digite um email válido');
    this.name = "InvalidEmail";
  }
}
