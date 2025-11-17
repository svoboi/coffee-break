import { type Request, type Response } from "express";
import { OrderItemModels } from "../models/OrderItem";

export const OrderItemController = {
  getAllOrderItems: (_req: Request, res: Response): void => {
    res.status(200).send(OrderItemModels.OrderItem);
  },
  getOrderItemById: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderItemModels.OrderItem.id) {
      res.status(200).send(OrderItemModels.OrderItem);
    } else {
      res.status(404).send({ message: "OrderItem not found" });
    }
  },
  addOrderItem: (req: Request, res: Response): void => {
    const newOrderItem = req.body;
    OrderItemModels.OrderItem = newOrderItem;
    res.status(201).send(OrderItemModels.OrderItem);
  },
  updateOrderItem: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderItemModels.OrderItem.id) {
      const updatedOrderItem = req.body;
      OrderItemModels.OrderItem = {
        ...OrderItemModels.OrderItem,
        ...updatedOrderItem,
      };
      res.status(200).send(OrderItemModels.OrderItem);
    } else {
      res.status(404).send({ message: "OrderItem not found" });
    }
  },
  deleteOrderItem: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderItemModels.OrderItem.id) {
      OrderItemModels.OrderItem = {} as typeof OrderItemModels.OrderItem;
      res.status(204).send();
    } else {
      res.status(404).send({ message: "OrderItem not found" });
    }
  },
};
