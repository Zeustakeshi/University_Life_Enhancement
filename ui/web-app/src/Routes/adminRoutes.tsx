import DashBoard from "../Pages/Admin/DashBoard/DashBoard";
import UserPage from "../Pages/Admin/User/UserPage";
import { AdminRouterLink } from "../Utils/routerLink";

export const AdminRoutes = [
  {
    path: AdminRouterLink.DashBoard,
    element: DashBoard,
  },
  {
    path: AdminRouterLink.User,
    element: UserPage,
  },
]