import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SpellSlots {
  first: number
  second: number
  third: number
  fourth: number
  fifth: number
  sixth: number
  seventh: number
  eighth: number
  ninth: number
}

const initialState: {
  saved: SpellSlots
  error: boolean
} = {
  saved: {
    first: 4,
    second: 3,
    third: 2,
    fourth: 1,
    fifth: 0,
    sixth: 0,
    seventh: 0,
    eighth: 0,
    ninth: 0,
  },
  error: false,
}

export const spellsSlice = createSlice({
  name: "spells",
  initialState: initialState,
  reducers: {
    saveSlots: (state, action: PayloadAction<SpellSlots>) => {
      state.saved.first = action.payload.first
      state.saved.second = action.payload.second
      state.saved.third = action.payload.third
      state.saved.fourth = action.payload.fourth
      state.saved.fifth = action.payload.fifth
      state.saved.sixth = action.payload.sixth
      state.saved.seventh = action.payload.seventh
      state.saved.eighth = action.payload.eighth
      state.saved.ninth = action.payload.ninth
    },
    setSlotInputError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
  },
})

export const { saveSlots, setSlotInputError } = spellsSlice.actions
