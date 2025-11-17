import { CoffeeModels } from "./Coffee";

const OrderItem = {
  id: 1,
  coffee: CoffeeModels.Coffees[1],
  quantity: 1,
};

const OrderItem2 = {
  id: 2,
  coffee: CoffeeModels.Coffee,
  quantity: 2,
};

const OrderItems = [OrderItem, OrderItem2];

export const OrderItemModels = { OrderItem, OrderItems };
