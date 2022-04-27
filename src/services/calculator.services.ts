export class CalculatorServices {


  add(adding: number, byAdding: number): number {
    return adding + byAdding;
  }

  subtract(minuend: number, subtrahend: number): number {
    return minuend - subtrahend;
  }

  multiply(multiplicand: number, multiplicator: number): number {
    return multiplicand * multiplicator;
  }

  division(divisor: number, dividend: number): number {
    if (dividend === 0) dividend = 1;
    return divisor / dividend;
  }
}
