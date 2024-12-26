/**
 * @file
 *
 * In addition to the use of mui's ThemeContext, the value of the selected theme is being
 * tracked in redux. This file defines the necessary redux pieces in order to keep track of this
 * data.
 */

import { createSlice } from "@reduxjs/toolkit"
import { themes } from "./theme"

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: 0,
  },
  reducers: {
    cycleTheme: state => {
      if (state.value === themes.length - 1) {
        state.value = 0
      } else {
        state.value += 1
      }
    },
  },
})

export const { cycleTheme } = themeSlice.actions
