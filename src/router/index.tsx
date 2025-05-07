import { createBrowserRouter } from "react-router-dom"
import HomePage from "@app/pages/home/Home"
import FormPage from "@app/pages/form/Form"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
])
