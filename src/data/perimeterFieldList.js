import { circlePerimeter } from "@utils/calculations/perimeters";

export const perimeters =
{
  circlePerimeter: {
    title: "Perímetro de una circunferencia",
    description: "Calcula el perímetro de una circunferencia a partir de un diámetro dado",
    fields: [
      {
        label: 'Diámetro',
        name: 'diameter',
      },
    ],
    result: ['Perímetro'],
    units: ['m'],
    function: circlePerimeter,
  }
}
