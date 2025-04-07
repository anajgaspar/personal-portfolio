import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { fileURLToPath } from "node:url"
import flowbiteReact from "flowbite-react/plugin/vite";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})