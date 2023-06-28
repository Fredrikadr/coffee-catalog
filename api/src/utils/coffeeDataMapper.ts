import { CoffeeDrink } from "../models/CoffeeDrink";

export function formatCoffeeData(rawData: any[]): CoffeeDrink[] {
  return rawData.map((data: any) => {
    const {
      id,
      name,
      category,
      formCode,
      displayOrder,
      availability,
      assets,
      sizes,
    } = data;

    return {
      id,
      name,
      category,
      formCode,
      displayOrder,
      availability,
      assets,
      sizes,
    };
  });
}