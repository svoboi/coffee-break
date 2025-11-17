export const getStatusLabel = (status: string): string => {
  switch (status) {
    case "NEW":
      return "Nové";
    case "IN_PROGRESS":
      return "Probíhá";
    case "READY_TO_PICKUP":
      return "Připraveno";
    case "COMPLETED":
      return "Hotovo";
    case "DECLINED":
      return "Zamítnuto";
    default:
      return status;
  }
};
