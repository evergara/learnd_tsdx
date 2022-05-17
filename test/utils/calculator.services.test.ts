import { CalculatorServices } from './../../src/utils/calculator.services';

describe('Calculator Services', () => {
  let cal: CalculatorServices;

  it('works add', () => {
    cal = new CalculatorServices();
    expect(cal.add(1, 2)).toEqual(3);
  });

  it('works subtract', () => {
    cal = new CalculatorServices();
    expect(cal.subtract(5, 2)).toEqual(3);
  });

  it('works multiply', () => {
    cal = new CalculatorServices();
    expect(cal.multiply(5, 2)).toEqual(10);
  });

  it('works multiply for zero', () => {
    cal = new CalculatorServices();
    expect(cal.multiply(5, 0)).toEqual(0);
  });

  it('works multiply for negative', () => {
    cal = new CalculatorServices();
    expect(cal.multiply(5, -1)).toEqual(-5);
  });

  it('works division', () => {
    cal = new CalculatorServices();
    expect(cal.division(25, 5)).toEqual(5);
  });

  it('works division for zero', () => {
    cal = new CalculatorServices();
    expect(cal.division(25, 0)).toEqual(25);
  });
});
