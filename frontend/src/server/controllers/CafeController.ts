import { type Request, type Response } from "express";
import { CafeModels } from "../models/Cafe";

export const CafeController = {
  getAllCafes: (_req: Request, res: Response): void => {
    res.status(200).send(CafeModels.Cafes);
  },
  getCafeById: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CafeModels.Cafe.id) {
      res.status(200).send(CafeModels.Cafe);
    } else {
      res.status(404).send({ message: "Cafe not found" });
    }
  },
  addCafe: (req: Request, res: Response): void => {
    const newCafe = req.body;
    CafeModels.Cafe = newCafe;
    res.status(201).send(CafeModels.Cafe);
  },
  updateCafe: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CafeModels.Cafe.id) {
      const updatedCafe = req.body;
      CafeModels.Cafe = { ...CafeModels.Cafe, ...updatedCafe };
      res.status(200).send(CafeModels.Cafe);
    } else {
      res.status(404).send({ message: "Cafe not found" });
    }
  },
  deleteCafe: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === CafeModels.Cafe.id) {
      CafeModels.Cafe = {} as typeof CafeModels.Cafe;
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Cafe not found" });
    }
  },
};
