import type { Route } from "./registerRoutes";
import { CafeController } from "../controllers/CafeController";

export const CafeRoutes: Route[] = [
  {
    method: "get",
    path: "/api/cafe",
    handler: CafeController.getAllCafes,
    // middleware: [authenticateJWT],
  },
  {
    method: "get",
    path: "/api/cafe/:id",
    handler: CafeController.getCafeById,
    // middleware: [authenticateJWT],
  },
  {
    method: "post",
    path: "/api/cafe",
    handler: CafeController.addCafe,
    // middleware: [authenticateJWT],
  },
  {
    method: "put",
    path: "/api/cafe/:id",
    handler: CafeController.updateCafe,
    // middleware: [authenticateJWT],
  },
  {
    method: "delete",
    path: "/api/cafe/:id",
    handler: CafeController.deleteCafe,
    // middleware: [authenticateJWT],
  },
];
