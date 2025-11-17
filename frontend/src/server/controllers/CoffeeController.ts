import { type Request, type Response } from "express";
import { CoffeeModels } from "../models/Coffee";

export const CoffeeController = {
  getAllCoffees: (_req: Request, res: Response): void => {
    res.status(200).send(CoffeeModels.Coffees);
  },
  getCoffeeById: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CoffeeModels.Coffee.id) {
      res.status(200).send(CoffeeModels.Coffee);
    } else {
      res.status(404).send({ message: "Coffee not found" });
    }
  },
  addCoffee: (req: Request, res: Response): void => {
    const newCoffee = req.body;
    CoffeeModels.Coffee = newCoffee;
    res.status(201).send(CoffeeModels.Coffee);
  },
  updateCoffee: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CoffeeModels.Coffee.id) {
      const updatedCoffee = req.body;
      CoffeeModels.Coffee = { ...CoffeeModels.Coffee, ...updatedCoffee };
      res.status(200).send(CoffeeModels.Coffee);
    } else {
      res.status(404).send({ message: "Coffee not found" });
    }
  },
  deleteCoffee: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CoffeeModels.Coffee.id) {
      CoffeeModels.Coffee = {} as typeof CoffeeModels.Coffee;
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Coffee not found" });
    }
  },
};
