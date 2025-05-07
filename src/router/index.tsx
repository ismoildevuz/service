import { createBrowserRouter } from "react-router-dom"
import HomePage from "@app/pages/home/Home"
import FormPage from "@app/pages/form/Form"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <FormPage />,
  },
])
