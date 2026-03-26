import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SetupGame from "../pages/SetupGame/SetupGame";
import Game from "../pages/Game/Game";
import EndGame from "../pages/EndGame/EndGame";
import UserPanel from "../pages/UserPanel/UserPanel";
import Admin from "../pages/Admin/Admin";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "setup/:id",
        element: <SetupGame />
      },
      {
        path: "game/:id",
        element: <Game />
      },
      {
        path: "endgame/:id",
        element: <EndGame />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <UserPanel />
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={["ADMIN", "ROLE_ADMIN"]} />,
        children: [
          {
            path: "admin",
            element: <Admin />
          },
        ],
      },
    ],
  },
]);

export default router;