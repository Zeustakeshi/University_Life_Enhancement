import { AdminRouterLink } from "../../Utils/routerLink";

interface MenuItemProps {
  content: string;
  icon?: React.ReactNode;
  href?: string;
  submenu?: MenuItemProps[] | null;
}

export const SiteMenuAdmin: MenuItemProps[] = [
  {
    content: "Dashboard",
    icon: "",
    href: AdminRouterLink.DashBoard,
    submenu: null,
  },
  {
    content: "User",
    icon: "",
    href: AdminRouterLink.User,
    submenu: null,
  }
];