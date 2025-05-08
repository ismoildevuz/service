import { createBrowserRouter } from "react-router-dom"
import HomePage from "@app/pages/login"
import FormPage from "@app/pages/form"
import MainLayout from "@app/layouts/main"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <FormPage />,
      },
      {
        path: "/login",
        element: <HomePage />,
      },
    ],
  },
])
