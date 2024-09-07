import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add to numbers', () => {
    expect(service.add(3, 4)).toEqual(7);
  });

  it('should return area of circle', () => {
    service.pi = 3.14
    expect(service.areaOfCirle(5)).toEqual(78.5);
  });
});
