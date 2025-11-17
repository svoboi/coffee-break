import type { Route } from "./registerRoutes";
import { OrderController } from "../controllers/OrderController";

export const OrderRoutes: Route[] = [
  {
    method: "get",
    path: "/api/order",
    handler: OrderController.getAllOrders,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/order/:id",
    handler: OrderController.getOrderById,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/order",
    handler: OrderController.addOrder,
    // middleware: [authenticateJWT],
  },
  {
    method: "put",
    path: "/api/order/:id",
    handler: OrderController.updateOrder,
    // middleware: [authenticateJWT],
  },
  {
    method: "delete",
    path: "/api/order/:id",
    handler: OrderController.deleteOrder,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/order/:id/status",
    handler: OrderController.updateOrderStatus,
    // middleware: [authenticateJWT],
  },
];
