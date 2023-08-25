import { circleArea, circularArcArea, rectangleArea, sectorCircleArc, trapezoidAreaGivenBase, triangleArea, triangleAreaGivenBase } from "@utils/calculations/areas";

export const areas = {
  circleArea: {
    title: 'Área de un circulo',
    description: 'Calcula el área de un circulo a partir de un diámetro dado',
    fields: [
      {
        label: 'Diámetro',
        name: 'diameter',
      },
    ],
    result: ['Área'],
    units: ['m2'],
    function: circleArea,
  },
  rectangleArea: {
    title: 'Área de un rectángulo',
    description: 'Calcula el área de un rectángulo a partir de su alto y ancho',
    fields: [
      { label: 'Alto', name: 'height' },
      { label: 'Ancho', name: 'width' },
    ],
    result: ['Área'],
    function: rectangleArea,
  },
  triangleArea: {
    title: 'Área de un triángulo',
    description:
      'Calcula el área de un triángulo a partir de sus lados, utilizando la fórmula de Heron',
    fields: [
      { label: 'Lado a', name: 'a' },
      { label: 'Lado b', name: 'b' },
      { label: 'Lado c', name: 'c' },
    ],
    result: ['Área'],
    function: triangleArea,
  },
  triangleAreaGivenBase: {
    title: 'Área de un triángulo rectángulo',
    description:
      'Calcula el área de un triángulo a partir de su base y su altura',
    fields: [
      { label: 'Altura', name: 'h' },
      { label: 'Base', name: 'a' },
    ],
    result: ['Área'],
    function: triangleAreaGivenBase,
  },
  trapezoidAreaGivenBase: {
    title: 'Área de un trapezoide',
    description:
      'Calcula el área de un trapezoide a partir de las líneas paralelas y su altura',
    fields: [
      { label: 'Lado a', name: 'a' },
      { label: 'Lado b', name: 'b' },
      { label: 'Altura', name: 'h' },
    ],
    result: ['Área'],
    function: trapezoidAreaGivenBase,
  },
  circularArcArea: {
    title: 'Área de una sección circular debajo de su arco (o cuña)',
    description:
      'Calcula el área de una sección circular a partir del radio y el ángulo de la sección de arco',
    fields: [
      { label: 'Radio', name: 'radius' },
      { label: 'Ángulo', name: 'angle' },
    ],
    result: ['Área'],
    function: circularArcArea,
  },
  sectorCircleArc: {
    title: 'Área de una porción circular entre un ángulo dado',
    description:
      'Calcula el área de una porción circular a partir del radio y el ángulo acotado entre la porción',
    fields: [
      { label: 'Radio', name: 'radius' },
      { label: 'Ángulo', name: 'angle' },
    ],
    result: ['Área'],
    function: sectorCircleArc,
  },
};
