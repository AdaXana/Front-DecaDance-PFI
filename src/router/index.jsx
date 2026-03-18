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
        path: "setup", 
        element: <SetupGame /> 
      },
      { 
        path: "game", 
        element: <Game /> 
      },
      { 
        path: "endgame", 
        element: <EndGame /> 
      },
      { 
        path: "profile",
        element: <UserPanel /> 
      },
      { 
        path: "admin", 
        element: <Admin /> 
      }
    ],
  },
]);

export default router;