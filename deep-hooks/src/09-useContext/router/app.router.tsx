import { createBrowserRouter, Navigate } from "react-router";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
