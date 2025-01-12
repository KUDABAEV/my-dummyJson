import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";



export const routing = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <div>ww</div>,
      },
      {
        path: "/products",
        element: <div>Products</div>,
      },
      {
        path: "/posts",
        element: <div>Posts</div>,
      },
      {
        path: "/todos",
        element: <div>Todos</div>,
      },
    ],
  },
]);