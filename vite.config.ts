import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: path.resolve(__dirname, "postcss.config.mjs"),
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
})
