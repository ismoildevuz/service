import { RouterProvider } from "react-router-dom"
import { router } from "@app/router"
import { ConfigProvider } from "antd"

export const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
