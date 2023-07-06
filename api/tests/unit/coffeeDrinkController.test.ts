import { Request, Response } from "express";
import CoffeeDrinkController from "../../src/controllers/CoffeeDrinkController";
import coffeeData from "../../../data/CoffeeData.json";
import { formatCoffeeData } from "../../src/utils/coffeeDataMapper";

jest.mock("../../src/utils/coffeeDataMapper", () => ({
  formatCoffeeData: jest.fn((rawData: any[]) => []),
}));

describe("CoffeeDrinkController", () => {
  let coffeeDrinkController: CoffeeDrinkController;
  let req: Request;
  let res: Response;

  beforeEach(() => {
    coffeeDrinkController = new CoffeeDrinkController();
    req = {} as Request;
    res = {} as Response;
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn();
  });

  it("should list all coffee drinks", () => {
    coffeeDrinkController.listAllCoffeeDrinks(req, res);

    expect(formatCoffeeData).toHaveBeenCalledWith(coffeeData);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it("should get a coffee drink by ID", () => {
    req.params = { id: "123" };

    const coffeeDrinkMock = { id: 123, name: "Coffee Drink" };
    jest.spyOn(Array.prototype, "find").mockReturnValueOnce(coffeeDrinkMock);

    coffeeDrinkController.getCoffeeDrinkById(req, res);

    expect(formatCoffeeData).toHaveBeenCalledWith(coffeeData);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(coffeeDrinkMock);
  });

  it("should return a 404 error if coffee drink is not found", () => {
    req.params = { id: "123" };

    jest.spyOn(Array.prototype, "find").mockReturnValueOnce(undefined);

    coffeeDrinkController.getCoffeeDrinkById(req, res);

    expect(formatCoffeeData).toHaveBeenCalledWith(coffeeData);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      code: 404,
      message: "Coffee drink not found",
    });
  });

  it("should handle error during listing coffee drinks", () => {
    // Mocks an error during listing coffee drinks
    (formatCoffeeData as jest.Mock).mockImplementationOnce(() => {
      throw new Error("Error during listing coffee drinks");
    });

    coffeeDrinkController.listAllCoffeeDrinks(req, res);

    expect(formatCoffeeData).toHaveBeenCalledWith(coffeeData);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      code: 500,
      message: "Something went wrong",
    });
  });

  it("should handle error when coffee drink is not found", () => {
    req.params = { id: "123" };

    jest.spyOn(Array.prototype, "find").mockImplementationOnce(() => {
      throw new Error("Coffee drink not found");
    });

    coffeeDrinkController.getCoffeeDrinkById(req, res);

    expect(formatCoffeeData).toHaveBeenCalledWith(coffeeData);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      code: 500,
      message: "Something went wrong",
    });
  });
});
