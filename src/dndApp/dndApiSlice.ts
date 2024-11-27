import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface SkillDetails {
  index: string
  name: string
  desc: string[]
  ability_score: {
    index: string
    name: string
    url: string
  }
  url: string
}

export interface AbilityScoreDetails {
  index: string
  name: string
  full_name: string
  desc: string[]
  skills: {
    name: string
    index: string
    url: string
  }[]
  url: string
}

export const dndApiSlice = createApi({
  reducerPath: "dndApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.dnd5eapi.co/api/",
  }),
  endpoints: builder => ({
    getSkillsDescription: builder.query<SkillDetails, string>({
      query: skill => `skills/${skill}`,
    }),
    getAbilityScoreDescription: builder.query<AbilityScoreDetails, string>({
      query: abilityScore => `ability-scores/${abilityScore}`,
    }),
  }),
})

export const {
  useGetSkillsDescriptionQuery,
  useGetAbilityScoreDescriptionQuery,
} = dndApiSlice
