import { CafeModels } from "../server/models/Cafe";
import { CoffeeModels } from "../server/models/Coffee";
import { OrderModels } from "../server/models/Order";
import { OrderItemModels } from "../server/models/OrderItem";
import { UserModels } from "../server/models/User";

// Simple delay to simulate network latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockApi: any = {
  // Cafe endpoints
  async get(url: string) {
    await delay(300);
    if (url === "/cafe") {
      return { data: CafeModels.Cafes };
    }
    const cafeId = url.match(/\/cafe\/(\d+)/)?.[1];
    if (cafeId) {
      const cafe = CafeModels.Cafes.find(
        (c: { id: number }) => c.id === parseInt(cafeId)
      );
      if (cafe) return { data: cafe };
    }

    // Coffee endpoints
    if (url === "/coffee") {
      return { data: CoffeeModels.Coffees };
    }
    const coffeeId = url.match(/\/coffee\/(\d+)/)?.[1];
    if (coffeeId) {
      const coffee = CoffeeModels.Coffees.find(
        (c: { id: number }) => c.id === parseInt(coffeeId)
      );
      if (coffee) return { data: coffee };
    }

    // Order endpoints
    if (url === "/order") {
      return { data: OrderModels.Orders };
    }
    const orderId = url.match(/\/order\/(\d+)/)?.[1];
    if (orderId) {
      const order = OrderModels.Orders.find(
        (o: { id: number }) => o.id === parseInt(orderId)
      );
      if (order) return { data: order };
    }

    // OrderItem endpoints
    if (url === "/orderItem") {
      return { data: OrderItemModels.OrderItems };
    }
    const orderItemId = url.match(/\/orderItem\/(\d+)/)?.[1];
    if (orderItemId) {
      const orderItem = OrderItemModels.OrderItems.find(
        (oi: { id: number }) => oi.id === parseInt(orderItemId)
      );
      if (orderItem) return { data: orderItem };
    }

    // User endpoints
    if (url === "/user") {
      return { data: UserModels.Users };
    }
    const userId = url.match(/\/user\/(\d+)/)?.[1];
    if (userId) {
      const user = UserModels.Users.find(
        (u: { id: number }) => u.id === parseInt(userId)
      );
      if (user) return { data: user };
    }

    throw new Error(`Mock endpoint not found: ${url}`);
  },

  async post(url: string, data: string) {
    await delay(300);
    console.log(`Mock POST ${url}`, data);
    // For mock, just return the posted data with a generated ID
    return { data: { ...JSON.parse(data), id: Math.random() * 1000 } };
  },

  async put(url: string, data: string) {
    await delay(300);
    console.log(`Mock PUT ${url}`, data);
    return { data: JSON.parse(data) };
  },

  async delete(url: string) {
    await delay(300);
    console.log(`Mock DELETE ${url}`);
    return { data: null };
  },
};
