import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskDetals from "./pages/TaskDetals.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercises from "./exercicios/Hooks/Exercises.jsx";
import UseEff from "./exercicios/UseEffects/UseEffect.jsx";
import UseRff from "./exercicios/UseEffects/UseRef.jsx";
import UseReduce from "./exercicios/UseEffects/UseReduce.jsx";
import UseReduce2 from "./exercicios/UseEffects/UseReduce2.jsx";
import Instagram from "./exercicios/Tailwindcss/Tailwindcss.jsx";
import UseMemo from "./exercicios/UseMemo.jsx";
import New from "./exercicios/NewExercice.jsx";
import LayoutEffect from "./exercicios/UseEffects/UseLayoutEffect.jsx";
import FirstConection from "./apis/FirstConection.jsx";
import SecondConection from "./apis/SecondConnection.jsx";
import MyFlix from "./pages/MyFlix/MyFlix.jsx";
import Modal from "./pages/MyFlix/components/Modal/Modal.jsx";
import NotFound from "./pages/MyFlix/components/404/NotFound.jsx";
import Assistir from "./pages/Assistir/Assistir.jsx";
import Pesquisar from "./pages/Pesquisar/Pesquisar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Authenticator } from "./contexts/login.jsx";
import { PrivateRoute } from "./PrivateRoutes.jsx";
import { Likes } from "./contexts/likes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-detals",
    element: <TaskDetals />,
  },
  {
    path: "/exercises",
    element: <Exercises />,
  },
  {
    path: "/useEff",
    element: <UseEff />,
  },
  {
    path: "/useReff",
    element: <UseRff />,
  },
  {
    path: "/useReduce",
    element: <UseReduce />,
  },
  {
    path: "/useReduce2",
    element: <UseReduce2 />,
  },
  {
    path: "/instagram",
    element: <Instagram />,
  },
  {
    path: "/useMemo",
    element: <UseMemo />,
  },
  {
    path: "/New",
    element: <New />,
  },
  {
    path: "/layouteffect",
    element: <LayoutEffect />,
  },
  {
    path: "/FirstConection",
    element: <FirstConection />,
  },
  {
    path: "/usuarios",
    element: <SecondConection />,
  },
  {
    path: "/myFlix",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <MyFlix />,
      },
    ],
  },
  {
    path: "/modal",
    element: <Modal />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/assistir",
    element: <Assistir />,
  },
  {
    path: "/Pesquisar",
    element: <Pesquisar />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authenticator>
      <Likes>
        <RouterProvider router={router} />
      </Likes>
    </Authenticator>
  </StrictMode>
);
