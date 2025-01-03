/**
 * The definition for a character sheet
 */
export interface CharacterSheet {
  name: string
  race: string
  ability_scores: Array<{
    name: string
    modifier: string
    score: string
  }>
  skills: Array<{
    name: string
    value: string
    proficient: boolean
  }>
  saving_throws: Array<{
    name: string
    modifier: string
    proficient: boolean
  }>
  armor_class: string
  initiative: string
  speed: string
  proficiency_bonus: string
  hp: {
    max: number
    current: number
  }
  classes: any
  gold: number
  bardic_inspiration: number
  inspiration: number
  death_saves: {
    success: number
    fail: number
  }
  notes: string
  weapons: Array<{
    name: string
    atk: string
    roll: string
    modifier: string
    damage_type: string
  }>
  spells: Array<{
    name: string
    cost: string
    roll: string
    damage: Array<{
      level: string
      damage: string
    }>
    description: string[]
    casting_time: string
    range: string
    components: string
    duration: string
  }>
  weapon_proficiency: string[]
  armor_proficiency: string[]
  language_proficiency: string[]
  feats_and_traits: Array<{
    name: string
    description: string[]
  }>
  items_and_equipment: Array<{
    name: string
    description: string[]
  }>
}
