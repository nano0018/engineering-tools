import { expect, test } from 'vitest';
import {
  circleArea,
  circularArcArea,
  rectangleArea,
  sectorCircleArc,
  trapezoidAreaGivenBase,
  triangleArea,
  triangleAreaGivenBase,
} from '../areas';

test('Calculate area of a circle. Should return 0.7854', () => {
  expect(circleArea(1)).toBeCloseTo(0.7854, 4);
});

test('Calculate area of a rectangle. Should return 6', () => {
  expect(rectangleArea(3, 2)).toBeCloseTo(6.0, 2);
});

test('Calculate area of a square. Should return 4', () => {
  expect(rectangleArea(2, 2)).toBeCloseTo(4.0, 2);
});

test('Calculate area of a triangle. Should return 6', () => {
  expect(triangleArea(5, 4, 3)).toBeCloseTo(6.0, 2);
});

test('Calculate area of a right triangle. Should return 4', () => {
  expect(triangleAreaGivenBase(2, 4)).toBeCloseTo(4.0, 2);
});

test('Calculate area of a trapezoid given base and parallel sides. Should return 1.5', () => {
  expect(trapezoidAreaGivenBase(1, 2, 1)).toBeCloseTo(1.5, 2);
});

test('Calculate area of a circular arc area. Should return 0.6142', () => {
  expect(circularArcArea(1, 120)).toBeCloseTo(0.6142, 4);
});

test('Calculate area of a circular arc area. Should return 0, because the angle is invalid (angle <= 0)', () => {
  expect(circularArcArea(1, 0)).toBeCloseTo(0, 0);
});

test('Calculate area of a circle section. Should return 1.047', () => {
  expect(sectorCircleArc(1, 120)).toBeCloseTo(1.047, 3);
});

test('Calculate area of a circle section. Should return 0, because the angle is invalid (angle <= 0)', () => {
  expect(sectorCircleArc(1, 0)).toBeCloseTo(0, 0);
});
