import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { castorRhodesCharacterSheet } from "./castorRhodesCharacterSheet"
import { CharacterSheet } from "./CharacterSheet.interface"

export const characterSheetApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: build => ({
    getCharacterSheet: build.query<CharacterSheet, void>({
      queryFn: async () => {
        return { data: castorRhodesCharacterSheet }
      },
    }),
  }),
})

export const { useGetCharacterSheetQuery } = characterSheetApiSlice
