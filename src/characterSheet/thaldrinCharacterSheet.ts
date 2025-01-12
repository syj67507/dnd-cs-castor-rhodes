import { CharacterSheet } from "./CharacterSheet.interface"

export const thaldrinCharacterSheet: CharacterSheet = {
  name: "Thaldrin",
  race: "Gnome",
  ability_scores: [
    {
      name: "STR",
      modifier: "-1",
      score: "8",
    },
    {
      name: "DEX",
      modifier: "3",
      score: "16",
    },
    {
      name: "CON",
      modifier: "2",
      score: "14",
    },
    {
      name: "INT",
      modifier: "4",
      score: "18",
    },
    {
      name: "WIS",
      modifier: "0",
      score: "10",
    },
    {
      name: "CHA",
      modifier: "-1",
      score: "8",
    },
  ],
  skills: [
    {
      name: "acrobatics",
      value: "+3",
      proficient: false,
    },
    {
      name: "animal-handling",
      value: "0",
      proficient: false,
    },
    {
      name: "arcana",
      value: "+7",
      proficient: true,
    },
    {
      name: "athletics",
      value: "-1",
      proficient: false,
    },
    {
      name: "deception",
      value: "-1",
      proficient: false,
    },
    {
      name: "history",
      value: "+4",
      proficient: false,
    },
    {
      name: "investigation",
      value: "+10",
      proficient: true,
    },
    {
      name: "insight",
      value: "0",
      proficient: false,
    },
    {
      name: "intimidation",
      value: "-1",
      proficient: false,
    },
    {
      name: "medicine",
      value: "0",
      proficient: false,
    },
    {
      name: "nature",
      value: "+4",
      proficient: false,
    },
    {
      name: "perception",
      value: "+3",
      proficient: true,
    },
    {
      name: "performance",
      value: "-1",
      proficient: false,
    },
    {
      name: "persuasion",
      value: "-1",
      proficient: false,
    },
    {
      name: "religion",
      value: "+4",
      proficient: false,
    },
    {
      name: "sleight-of-hand",
      value: "+6",
      proficient: true,
    },
    {
      name: "stealth",
      value: "+9",
      proficient: true,
    },
    {
      name: "survival",
      value: "0",
      proficient: false,
    },
  ],
  saving_throws: [
    {
      name: "Strength",
      proficient: false,
      modifier: "-1",
    },
    {
      name: "Dexterity",
      proficient: false,
      modifier: "+3",
    },
    {
      name: "Constitution",
      proficient: false,
      modifier: "+5",
    },
    {
      name: "Intelligence",
      proficient: false,
      modifier: "+7",
    },
    {
      name: "Wisdom",
      proficient: false,
      modifier: "0",
    },
    {
      name: "Charisma",
      proficient: false,
      modifier: "-1",
    },
  ],
  armor_class: "18",
  initiative: "+3",
  speed: "25",
  proficiency_bonus: "+3",
  hp: {
    max: 37,
    current: 37,
  },
  weapon_proficiency: ["Simple"],
  armor_proficiency: ["Heavy", "Light", "Medium", "Shields"],
  language_proficiency: ["Common", "Gnomish", "Undercommon"],
  gold: 0,
  bardic_inspiration: 0,
  inspiration: 0,
  death_saves: {
    success: 0,
    fail: 0,
  },
  notes: "",
  classes: {},
  weapons: [],
  spells: [],
  feats_and_traits: [],
  items_and_equipment: [],
}
