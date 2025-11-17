import { CafeModels } from "./Cafe";
import { OrderItemModels } from "./OrderItem";
import { UserModels } from "./User";

const Order = {
  id: 1,
  state: "NEW",
  customer: UserModels.Users[2],
  items: [OrderItemModels.OrderItems[0]],
  cafe: CafeModels.Cafes[0],
  pickUpTime: new Date().toISOString(),
  createdAt: new Date().toISOString(),
};

const Order2 = {
  id: 2,
  state: "IN_PROGRESS",
  customer: UserModels.Users[0],
  items: OrderItemModels.OrderItems,
  cafe: CafeModels.Cafes[0],
  pickUpTime: new Date().toISOString(),
  createdAt: new Date().toISOString(),
};

const Order3 = {
  id: 3,
  state: "READY_TO_PICKUP",
  customer: UserModels.Users[2],
  items: [OrderItemModels.OrderItems[1]],
  cafe: CafeModels.Cafes[0],
  pickUpTime: new Date().toISOString(),
  createdAt: new Date().toISOString(),
};

const Order4 = {
  id: 4,
  state: "COMPLETED",
  customer: UserModels.Users[0],
  items: [OrderItemModels.OrderItems[0], OrderItemModels.OrderItems[1]],
  cafe: CafeModels.Cafes[0],
  pickUpTime: new Date().toISOString(),
  createdAt: new Date().toISOString(),
};

const Orders = [Order, Order2, Order3, Order4];

export const OrderModels = { Order, Orders };
