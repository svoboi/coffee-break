import Express from "express";
import dotenv from "dotenv";
import { registerRoutes } from "./routes/registerRoutes";
import { CafeRoutes } from "./routes/CafeRoutes";
import { CoffeeRoutes } from "./routes/CoffeeRoutes";
import { OrderItemRoutes } from "./routes/OrderItemRoutes";
import { UserRoutes } from "./routes/UserRoutes";
import { OrderRoutes } from "./routes/OrderRoutes";

dotenv.config({ path: "./../../.env", debug: true });
const port = 5645;
const app = Express();

app.use(Express.json({ limit: "50mb" }));
app.use(Express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

registerRoutes(app, [
  ...CafeRoutes,
  ...CoffeeRoutes,
  ...OrderItemRoutes,
  ...UserRoutes,
  ...OrderRoutes,
]);
