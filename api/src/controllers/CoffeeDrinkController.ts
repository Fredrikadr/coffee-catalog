import { Request, Response } from "express";
import coffeeData from "../../../data/CoffeeData.json";
import { CoffeeDrink } from "../models/CoffeeDrink";

class CoffeeDrinkController {
  public listAllCoffeeDrinks(req: Request, res: Response): void {

    const coffeeDrinks: CoffeeDrink[] = coffeeData.map((data: any) => {
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
    console.log(coffeeDrinks)
    res.status(200).json(coffeeDrinks);

  }

  public getCoffeeDrinkById(req: Request, res: Response): void {

  }
}

export default CoffeeDrinkController;