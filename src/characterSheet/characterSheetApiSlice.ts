import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { castorRhodesCharacterSheet } from "./castorRhodesCharacterSheet"
import { CharacterSheet } from "./CharacterSheet.interface"
import { thaldrinCharacterSheet } from "./thaldrinCharacterSheet"

export const characterSheetApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: build => ({
    getCharacterSheet: build.query<CharacterSheet, string>({
      queryFn: async id => {
        if (id === "thaldrin") {
          return { data: thaldrinCharacterSheet }
        } else {
          return { data: castorRhodesCharacterSheet }
        }
      },
    }),
  }),
})

export const { useGetCharacterSheetQuery } = characterSheetApiSlice
