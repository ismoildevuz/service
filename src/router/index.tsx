import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@app/pages/home"
import { FormPage } from "@app/pages/form"

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
