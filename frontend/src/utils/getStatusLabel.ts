import { translations } from "../i18n/czech";

export const getStatusLabel = (status: string): string => {
  const t = translations.status;

  switch (status) {
    case "NEW":
      return t.new;
    case "IN_PROGRESS":
      return t.inProgress;
    case "READY_TO_PICKUP":
      return t.readyToPickup;
    case "COMPLETED":
      return t.completed;
    case "DECLINED":
      return t.declined;
    default:
      return status;
  }
};
