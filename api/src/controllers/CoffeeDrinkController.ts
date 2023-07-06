import { Request, Response } from "express";
import coffeeData from "../../../data/CoffeeData.json";
import { CoffeeDrink, Error, FormCode } from "../models/CoffeeDrink";
import { formatCoffeeData } from "../utils/coffeeDataMapper";

class CoffeeDrinkController {
  public listAllCoffeeDrinks(req: Request, res: Response): void {
    try {
      const coffeeDrinks: CoffeeDrink[] = formatCoffeeData(coffeeData);

      res.status(200).json(coffeeDrinks);

    } catch (error) {
      const errorResponse: Error = {
        code: 500,
        message: "Something went wrong"
      };
      res.status(500).json(errorResponse);
    }
  }

  public getCoffeeDrinkById(req: Request, res: Response): void {
    try {
      const coffeeId: number = parseInt(req.params.id);
      const coffeeDrinks: CoffeeDrink[] = formatCoffeeData(coffeeData);

      const coffeeDrink: CoffeeDrink | undefined = coffeeDrinks.find((drink: CoffeeDrink) => drink.id === coffeeId);

      if (coffeeDrink) {

        res.status(200).json(coffeeDrink);
      } else {
        const errorResponse: Error = {
          code: 404,
          message: "Coffee drink not found"
        };
        res.status(404).json(errorResponse);
      }

    } catch (error) {
      const errorResponse: Error = {
        code: 500,
        message: "Something went wrong"
      };
      res.status(500).json(errorResponse)
    }
  }
}

export default CoffeeDrinkController;