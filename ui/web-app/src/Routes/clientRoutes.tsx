import HomePage from "../Pages/Client/HomePage/HomePage";
import LoginPage from "../Pages/Client/LoginPage";
import { UserRouterLink } from "../Utils/routerLink";

export const ClientRoutes = [
  {
    path: UserRouterLink.HomePage,
    element: HomePage,
  },
  {
    path: UserRouterLink.LoginPage,
    element: LoginPage,
  },
];
