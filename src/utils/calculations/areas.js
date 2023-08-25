export const circleArea = ({ diameter }) => {
  if (diameter <= 0) {
    return 0;
  }

  return Math.PI * Math.pow(diameter / 2, 2);
};

export const rectangleArea = ({ width, height }) => {
  return width * height;
};

export const triangleArea = ({ a, b, c }) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 0;
  }

  const halfPerimeter = (a + b + c) / 2;
  return Math.sqrt(
    halfPerimeter *
      (halfPerimeter - a) *
      (halfPerimeter - b) *
      (halfPerimeter - c)
  );
};

export const triangleAreaGivenBase = ({ a, h }) => {
  return (a * h) / 2;
};

export const trapezoidAreaGivenBase = ({ a, b, h }) => {
  return ((a + b) / 2) * h;
};

export const circularArcArea = ({ radius, angle }) => {
  if (angle <= 0) {
    return 0;
  }
  const radiansAngle = (angle * Math.PI) / 180;
  return (Math.pow(radius, 2) * (radiansAngle - Math.sin(radiansAngle))) / 2;
};

export const sectorCircleArc = ({ radius, angle }) => {
  if (angle <= 0 || radius <= 0) {
    return 0;
  }
  return (angle / 360) * Math.PI * Math.pow(radius, 2);
};
