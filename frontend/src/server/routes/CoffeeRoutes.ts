import type { Route } from "./registerRoutes";
import { CoffeeController } from "../controllers/CoffeeController";

export const CoffeeRoutes: Route[] = [
  {
    method: "get",
    path: "/api/coffee",
    handler: CoffeeController.getAllCoffees,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/coffee/:id",
    handler: CoffeeController.getCoffeeById,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/coffee",
    handler: CoffeeController.addCoffee,
    // middleware: [authenticateJWT],
  },
  {
    method: "put",
    path: "/api/coffee/:id",
    handler: CoffeeController.updateCoffee,
    // middleware: [authenticateJWT],
  },
  {
    method: "delete",
    path: "/api/coffee/:id",
    handler: CoffeeController.deleteCoffee,
    // middleware: [authenticateJWT],
  },
];
