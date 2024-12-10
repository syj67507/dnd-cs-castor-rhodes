import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { qrcode } from "vite-plugin-qrcode"

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://syj67507.github.io/dnd-cs-castor-rhodes/"
  plugins: [react(), qrcode()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
