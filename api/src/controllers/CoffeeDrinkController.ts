import { Request, Response } from "express";
import coffeeData from "../../../data/CoffeeData.json";
import { CoffeeDrink, Error } from "../models/CoffeeDrink";

class CoffeeDrinkController {
  public listAllCoffeeDrinks(req: Request, res: Response): void {
    try {
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

      console.log(coffeeData)
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
    
  }
}

export default CoffeeDrinkController;