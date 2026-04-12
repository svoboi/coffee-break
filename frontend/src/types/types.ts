// User Role type
export const UserRole = {
  CUSTOMER: "CUSTOMER",
  CAFE_EMPLOYEE: "CAFE_EMPLOYEE",
  ADMIN: "ADMIN",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

// Order State type
export const OrderState = {
  NEW: "NEW",
  IN_PROGRESS: "IN_PROGRESS",
  READY_TO_PICKUP: "READY_TO_PICKUP",
  COMPLETED: "COMPLETED",
  DECLINED: "DECLINED",
  UNCLAIMED: "UNCLAIMED",
} as const;

export type OrderState = (typeof OrderState)[keyof typeof OrderState];

// AppUser type
export interface AppUser {
  id: number;
  userRole: UserRole;
  realName: string;
  userName: string;
  password: string;
}

// Coffee type
export interface Coffee {
  id: number;
  name: string;
  price: number;
  currency: string;
}

// OrderItem type
export interface OrderItem {
  id: number;
  coffee: Coffee;
  quantity: number;
}

export interface PostOrderItem {
  coffee: { id: number };
  quantity: number;
}

// Cafe types
export interface Cafe {
  id: number;
  name: string;
  description: string;
  address: string;
}

export type PostCafe = Omit<Cafe, "id">;

// CoffeeOrder type
export interface CoffeeOrder {
  id: number;
  state: OrderState;
  customer: AppUser;
  items: OrderItem[];
  cafe: Cafe;
  pickUpTime: string; // ISO 8601 date-time string
  createdAt: string; // ISO 8601 date-time string
}

export interface PostCoffeeOrder {
  state: OrderState;
  customer: { id: number };
  items: Array<{ id: number }>;
  cafe: { id: number };
  pickUpTime: string;
}
