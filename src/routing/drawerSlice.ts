import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    open: false,
  },
  reducers: {
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
  },
})

export const { setDrawerOpen } = drawerSlice.actions
