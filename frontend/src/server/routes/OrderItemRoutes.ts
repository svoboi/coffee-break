import type { Route } from "./registerRoutes";
import { OrderItemController } from "../controllers/OrderItemController";

export const OrderItemRoutes: Route[] = [
  {
    method: "get",
    path: "/api/orderItem",
    handler: OrderItemController.getAllOrderItems,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/orderItem/:id",
    handler: OrderItemController.getOrderItemById,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/orderItem",
    handler: OrderItemController.addOrderItem,
    // middleware: [authenticateJWT],
  },
  {
    method: "put",
    path: "/api/orderItem/:id",
    handler: OrderItemController.updateOrderItem,
    // middleware: [authenticateJWT],
  },
  {
    method: "delete",
    path: "/api/orderItem/:id",
    handler: OrderItemController.deleteOrderItem,
    // middleware: [authenticateJWT],
  },
];
