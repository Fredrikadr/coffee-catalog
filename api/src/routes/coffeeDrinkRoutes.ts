import express from "express";
import CoffeeDrinkController from "../controllers/CoffeeDrinkController";

const router = express.Router();
const coffeeDrinkController = new CoffeeDrinkController;

router.get("/", (req: Request, res: Response) => {
  coffeeDrinkController.listAllCoffeeDrinks(req, res)
});

router.get("/:id")

export default router;