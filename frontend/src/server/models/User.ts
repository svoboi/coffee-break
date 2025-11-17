const User = {
  id: 1,
  userRole: "CUSTOMER",
  realName: "Barbora Štamgastová",
  userName: "stambar",
  password: "kava",
};

const User2 = {
  id: 2,
  userRole: "CAFE_EMPLOYEE",
  realName: "Jan Novák",
  userName: "novakjan",
  password: "espresso",
};

const User3 = {
  id: 3,
  userRole: "CUSTOMER",
  realName: "Alice Johnson",
  userName: "alicej",
  password: "latte",
};

const Users = [User, User2, User3];

export const UserModels = { User, Users };
