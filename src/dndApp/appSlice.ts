import { createSlice } from "@reduxjs/toolkit"
import { themes } from "./theme"

export const slice = createSlice({
  name: "app",
  initialState: {
    theme: 0,
  },
  reducers: {
    cycleTheme(state) {
      if (state.theme + 1 >= themes.length) {
        state.theme = 0
      } else {
        state.theme = state.theme + 1
      }
    },
  },
})

export const { cycleTheme } = slice.actions
