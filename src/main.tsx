import React from "react"
import { createRoot } from "react-dom/client"
import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { persistor, store } from "./app/store"
import { ThemedApp } from "./theme/ThemedApp"
import { PersistGate } from 'redux-persist/integration/react'


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  
  root.render(
    <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CssBaseline />
            <ThemedApp />
          </PersistGate>
        </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
