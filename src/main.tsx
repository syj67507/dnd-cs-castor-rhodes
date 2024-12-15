import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./dndApp/App"
import { store } from "./app/store"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { originalBaseTheme, cozyTheme } from "./dndApp/theme"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={cozyTheme}>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
