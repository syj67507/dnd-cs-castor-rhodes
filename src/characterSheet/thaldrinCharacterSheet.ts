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
  weapons: [
    {
      name: "Lightning Launcher",
      atk: "+6",
      roll: "1d6",
      modifier: "+3",
      damage_type: "piercing",
    },
    {
      name: "Crossbow, light",
      atk: "+6",
      roll: "1d8",
      modifier: "+3",
      damage_type: "piercing",
    },
    {
      name: "Dagger",
      atk: "+6",
      roll: "1d4",
      modifier: "+3",
      damage_type: "piercing",
    },
  ],
  spells: [],
  feats_and_traits: [
    {
      name: "Cunning Action",
      description: [
        "As a bonus action you can Dash, Disengage or Hide (use once/turn).",
      ],
    },
    {
      name: "Arcane Armor",
      description: [
        "Your metallurgical pursuits have led to you making armor a conduit for your artificer magic. As an action, you can turn a suit of heavy armor you are wearing into arcane armor, provided you have smith's tools in hand.",
        "You gain the following benefits while wearing the power armor:",
        "- If the armor normally has a Strength requirement, the power armor lacks this requirement for you.",
        "- You can use the power armor as a spellcasting focus for your artificer spells.",
        "- The power armor attaches to you and can't be removed against your will. It also expands to cover your entire body, and it replaces any missing limbs, functioning identically to a body part it is replacing.",
        "- You can doff or don the armor as an action",
        "The armor continues to be arcane armor until you doff it, you don another suit of armor, or you die.",
      ],
    },
    {
      name: "Armor Model",
      description: [
        "You can customize your arcane armor. When you do so, choose one of the following armor models: guardian or infiltrator. The model you choose gives you special benefits while you wear it.",
        "Each model includes a special weapon. When you attack with that weapon, you can use your Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls.",
        "You can change your power armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.",
        "",
        "Guardian. You design your armor to be in the front line of conflict. It has the following features:",
        "- Thunder Gauntlets. Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
        "- Defensive Field. As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "",
        "Infiltrator. You customize your armor for subtle undertakings. It has the following features:",
        "- Lightning Launcher. A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.",
        "- Powered Steps. Your walking speed increases by 5 feet.",
        "- Dampening Field. You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.",
      ],
    },
    {
      name: "City Secrets",
      description: [
        "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.",
      ],
    },
    {
      name: "Enhanced Arcane Focus",
      description: [
        "Item: A rod, staff or wand (requires attunement)",
        "While holding this item, a creature gains +1 bonus to spell attack rolls. In addition, the creature ignores half cover when making a spell attack.",
        "The bonus increases to +2 when you reach 10th level in this class.",
      ],
    },
    {
      name: "Gnome Cunning",
      description: ["Advantage on INT, WIS, and CHA saves against magic."],
    },
  ],
  items_and_equipment: [
    {
      name: "Lightning Launcher",
      description: [
        "A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.",
      ],
    },
    {
      name: "Boots of Elvenkind",
      description: [
        "Wondrous item, uncommon",
        "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
      ],
    },
    {
      name: "",
      description: [
        "Wondrous item, common",
        "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.",
        "When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can't be used again until the next dawn.",
      ],
    },
  ],
}
