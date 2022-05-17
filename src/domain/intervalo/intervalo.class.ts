import { Intervalo } from './intervalo.class';
export class Intervalo {
  
  
  constructor(inferior: number, superior: number ){

  }

  length(): number {
    return 0.0;
  }

  move(scroll: number): void {}

  displaced(scroll: number): Intervalo {
    return this;
  }

  including(value: number): boolean {
    return false;
  }

  including(intervalo: Intervalo): boolean {
    return false;
  }

  equal(intervalo: Intervalo): boolean {
    return false;
  }

  interception(intervalo: Intervalo): Intervalo {
    return this;
  }

  haveInterception(intervalo: Intervalo): boolean {
    return false;
  }

  doubling(): void {}
  oppose(): void {}

  pickUp(): void {}
  show(): Intervalo {
    return this;
  }

  split(quantity: number): Intervalo[]{
      return [];
  }
  clone(): Intervalo {
    return {};
  }
}
