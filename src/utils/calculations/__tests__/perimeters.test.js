import { expect, test } from 'vitest';
import { circlePerimeter } from '../perimeters';

test('Calculate perimeter of a circle. Should return 3.1416', () => {
  expect(circlePerimeter(1)).toBeCloseTo(3.1416, 4);
});
