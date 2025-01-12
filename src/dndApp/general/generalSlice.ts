import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GeneralState {
  gold: string
  currentHP: string
  tempHP: string
  bardicInspiration: string
  inspiration: string
  oldCharges: {
    [key: string]: boolean
  }
  charges: GeneralStateCharges
}

export interface GeneralStateCharges {
  deathSaves: boolean[]
  hitdice: boolean[]
  rage: boolean[]
  deathFails: boolean[]
}

const initialState: GeneralState = {
  gold: "0",
  currentHP: "0",
  tempHP: "0",
  bardicInspiration: "0",
  inspiration: "0",
  oldCharges: {},
  charges: {
    deathSaves: [],
    hitdice: [],
    rage: [],
    deathFails: [],
  },
}

export const generalSlice = createSlice({
  name: "general",
  initialState: initialState,
  reducers: {
    setGold: (state, action: PayloadAction<string>) => {
      state.gold = action.payload
    },
    setCurrentHP: (state, action: PayloadAction<string>) => {
      state.currentHP = action.payload
    },
    setTempHP: (state, action: PayloadAction<string>) => {
      state.tempHP = action.payload
    },
    setBardicInspiration: (state, action: PayloadAction<string>) => {
      state.bardicInspiration = action.payload
    },
    setInspiration: (state, action: PayloadAction<string>) => {
      state.inspiration = action.payload
    },
    setOldCharges: (
      state,
      action: PayloadAction<{
        key: string
        value: boolean
      }>,
    ) => {
      state.oldCharges = {
        ...state.oldCharges,
        [action.payload.key]: action.payload.value,
      }
    },
    setCharges: (
      state,
      action: PayloadAction<{
        id: keyof GeneralStateCharges
        value: boolean[]
      }>,
    ) => {
      state.charges = {
        ...state.charges,
        [action.payload.id]: action.payload.value,
      }
    },
  },
})

export const {
  setGold,
  setBardicInspiration,
  setCurrentHP,
  setInspiration,
  setTempHP,
  setOldCharges,
  setCharges,
} = generalSlice.actions
