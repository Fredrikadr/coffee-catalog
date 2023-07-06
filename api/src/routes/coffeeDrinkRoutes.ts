import express, { Request, Response } from "express";
import CoffeeDrinkController from "../controllers/CoffeeDrinkController";

const router = express.Router();
const coffeeDrinkController = new CoffeeDrinkController;

router.get("/coffee-drinks", (req: Request, res: Response) => {
  coffeeDrinkController.listAllCoffeeDrinks(req, res)
});

router.get("/coffee-drinks/:id", (req: Request, res: Response) => {
  coffeeDrinkController.getCoffeeDrinkById(req, res)
});

export default router;