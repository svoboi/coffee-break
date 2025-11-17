import { createFileRoute, useNavigate } from "@tanstack/react-router";
import AccountDetails from "../components/account/AccountDetails";
import { useLogin } from "../hooks/useLoginHook";

export const Route = createFileRoute("/account")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated } = useLogin();
  const navigate = useNavigate();
  if (!isAuthenticated) navigate({ to: "/login" });
  return isAuthenticated && <AccountDetails />;
}
