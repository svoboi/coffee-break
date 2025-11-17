import { type Application, type Request, type Response } from "express";

export interface Route {
  method: "get" | "post" | "put" | "delete" | "patch" | "head";
  path: string;
  handler: (req: Request, res: Response) => void;
}

export const registerRoutes = (app: Application, routes: Route[]): void => {
  routes.forEach((route) => {
    app[route.method](route.path, route.handler);
  });
};
