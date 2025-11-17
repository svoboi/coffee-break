import { type Request, type Response } from "express";
import { OrderModels } from "../models/Order";

export const OrderController = {
  getAllOrders: (_req: Request, res: Response): void => {
    res.status(200).send(OrderModels.Orders);
  },
  getOrderById: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderModels.Order.id) {
      res.status(200).send(OrderModels.Order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  },
  addOrder: (req: Request, res: Response): void => {
    const newOrder = req.body;
    OrderModels.Order = newOrder;
    res.status(201).send(OrderModels.Order);
  },
  updateOrder: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderModels.Order.id) {
      const updatedOrder = req.body;
      OrderModels.Order = { ...OrderModels.Order, ...updatedOrder };
      res.status(200).send(OrderModels.Order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  },
  deleteOrder: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    if (id === OrderModels.Order.id) {
      OrderModels.Order = {} as typeof OrderModels.Order;
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  },
  updateOrderStatus: (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const newState = req.query.newState as string;
    if (id === OrderModels.Order.id) {
      OrderModels.Order = { ...OrderModels.Order, state: newState };
      res.status(200).send(OrderModels.Order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  },
};
