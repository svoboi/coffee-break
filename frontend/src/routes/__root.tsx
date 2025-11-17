import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import { LoginProvider } from "../context/LoginContext";
import { ToastContainer } from "react-toastify";
import "./root.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <LoginProvider>
      <div className="app-wrapper">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main className="main-content" id="main-content">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </LoginProvider>
  );
}
