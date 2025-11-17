import type { Route } from "./registerRoutes";
import { UserController } from "../controllers/UserController";

export const UserRoutes: Route[] = [
  {
    method: "get",
    path: "/api/user",
    handler: UserController.getAllUsers,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/user/:id",
    handler: UserController.getUserById,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/user",
    handler: UserController.addUser,
    // middleware: [authenticateJWT],
  },
  {
    method: "put",
    path: "/api/user/:id",
    handler: UserController.updateUser,
    // middleware: [authenticateJWT],
  },
  {
    method: "delete",
    path: "/api/user/:id",
    handler: UserController.deleteUser,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/user/:userId/order",
    handler: UserController.getUserOrders,
    // middleware: [authenticateJWT],
  },
];
