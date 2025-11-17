import { type Request, type Response } from "express";
import { UserModels } from "../models/User";

export const UserController = {
  getAllUsers: (_req: Request, res: Response): void => {
    res.status(200).send(UserModels.User);
  },
  getUserById: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === UserModels.User.id) {
      res.status(200).send(UserModels.User);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  },
  addUser: (req: Request, res: Response): void => {
    const newUser = req.body;
    UserModels.User = newUser;
    res.status(201).send(UserModels.User);
  },
  updateUser: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === UserModels.User.id) {
      const updatedUser = req.body;
      UserModels.User = { ...UserModels.User, ...updatedUser };
      res.status(200).send(UserModels.User);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  },
  deleteUser: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === UserModels.User.id) {
      UserModels.User = {} as typeof UserModels.User;
      res.status(204).send();
    } else {
      res.status(404).send({ message: "User not found" });
    }
  },
  getUserOrders: (req: Request, res: Response): void => {
    const userId = parseInt(req.params.userId, 10);
    if (userId === UserModels.User.id) {
      res.status(200).send([]);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  },
};
