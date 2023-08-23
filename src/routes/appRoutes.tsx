import { RouteType } from "./config";

// DASHBOARD
import DashboardPage from "../pages/dashboard/DashboardPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <DashboardPage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    state: "dashboard",
  },

];

export default appRoutes;
