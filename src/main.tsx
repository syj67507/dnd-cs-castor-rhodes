import React from "react"
import { createRoot } from "react-dom/client"
import App from "./dndApp/App"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { oceanTheme } from "./dndApp/theme"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  
  root.render(
    <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={oceanTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
