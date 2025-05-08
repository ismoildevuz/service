import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "@app/app"
import "@ant-design/v5-patch-for-react-19"

import "@app/assets/style/main.scss"
import "@app/assets/style/tailwind.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
