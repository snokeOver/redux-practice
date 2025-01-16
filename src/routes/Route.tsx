import RootLayout from "@/layout/RootLayout";
import Home from "@/pages/Home";
import Task from "@/pages/Task";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);

export default router;
