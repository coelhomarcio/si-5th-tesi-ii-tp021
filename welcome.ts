export class Welcome {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return `Welcome ${this.message}!`;
  }
}
