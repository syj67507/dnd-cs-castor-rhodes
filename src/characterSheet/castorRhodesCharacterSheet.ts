import { CharacterSheet } from "./CharacterSheet.interface"

export const castorRhodesCharacterSheet: CharacterSheet = {
  name: "Castor Rhodes",
  race: "Human",
  ability_scores: [
    {
      name: "STR",
      modifier: "+4",
      score: "18",
    },
    {
      name: "DEX",
      modifier: "+2",
      score: "14",
    },
    {
      name: "CON",
      modifier: "+3",
      score: "16",
    },
    {
      name: "INT",
      modifier: "-1",
      score: "9",
    },
    {
      name: "WIS",
      modifier: "+1",
      score: "12",
    },
    {
      name: "CHA",
      modifier: "0",
      score: "10",
    },
  ],
  skills: [
    { name: "acrobatics", value: "+2", proficient: false },
    { name: "animal-handling", value: "+4", proficient: true },
    { name: "arcana", value: "-1", proficient: false },
    { name: "athletics", value: "+4", proficient: true },
    { name: "deception", value: "0", proficient: false },
    { name: "history", value: "-1", proficient: true },
    { name: "investigation", value: "-1", proficient: false },
    { name: "insight", value: "+1", proficient: false },
    { name: "intimidation", value: "+3", proficient: true },
    { name: "medicine", value: "+1", proficient: false },
    { name: "nature", value: "-1", proficient: false },
    { name: "perception", value: "+1", proficient: false },
    { name: "performance", value: "0", proficient: false },
    { name: "persuasion", value: "0", proficient: false },
    { name: "religion", value: "-1", proficient: false },
    { name: "sleight-of-hand", value: "+2", proficient: false },
    { name: "stealth", value: "+2", proficient: false },
    { name: "survival", value: "+1", proficient: true },
  ],
  saving_throws: [
    { name: "Strength", proficient: true, modifier: "+7" },
    { name: "Dexterity", proficient: false, modifier: "+2" },
    { name: "Constitution", proficient: true, modifier: "+6" },
    { name: "Intelligence", proficient: false, modifier: "-1" },
    { name: "Wisdom", proficient: false, modifier: "+1" },
    { name: "Charisma", proficient: false, modifier: "0" },
  ],
  armor_class: "15",
  initiative: "+2",
  speed: "40/30",
  proficiency_bonus: "+3",
  hp: {
    max: 64,
    current: 64,
  },
  classes: {
    barbarian: {
      level: 5,
      hit_die: "d12",
      rage_charges: 3,
    },
  },
  gold: 10,
  bardic_inspiration: 0,
  inspiration: 0,
  death_saves: {
    success: 0,
    fail: 0,
  },
  notes: "",
  weapons: [
    {
      name: "Bloodrage Greataxe",
      atk: "+7/9",
      roll: "1d12",
      modifier: "[+4/+6]",
      damage_type: "slashing/magical",
    },
    {
      name: "Harpoon",
      atk: "+7",
      roll: "1d6",
      modifier: "+4",
      damage_type: "piercing",
    },
    {
      name: "Handaxe",
      atk: "+7",
      roll: "1d6",
      modifier: "+4",
      damage_type: "slashing",
    },
    {
      name: "Handaxe",
      atk: "+7",
      roll: "1d6",
      modifier: "+4",
      damage_type: "slashing",
    },
  ],
  spells: [
    {
      name: "Create Bonfire",
      cost: "1 Action",
      roll: "DC 15 DEX",
      damage: [
        { level: "1", damage: "1d8 fire" },
        { level: "5", damage: "2d8 fire" },
        { level: "11", damage: "3d8 fire" },
        { level: "17", damage: "4d8 fire" },
      ],
      description: [
        "You create a bonfire on ground that you cansee within range. Until the spell ends, themagic bonfire fills a 5-foot cube. Any creaturein the bonfire’s space when you cast the spellmust succeed on a Dexterity saving throw ortake 1d8 fire damage. A creature must alsomake the saving throw when it moves into thebonfire’s space for the first time on a turn orends its turn there. The bonfire ignitesflammable objects in its area that aren’t beingworn or carried. The spell’s damage increasesby 1d8 when you reach 5th level (2d8), 11thlevel (3d8), and 17th level (4d8).",
      ],
      casting_time: "1 Action.",
      range: "60ft",
      components: "Verbal, Somatic",
      duration: "Concentration, 1 min",
    },
    {
      name: "Mending",
      cost: "1 min",
      roll: "DC 15 DEX",
      damage: [{ level: "1", damage: "N / A" }],
      description: [
        "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.",
      ],
      casting_time: "1 Action.",
      range: "Touch",
      components: "Verbal, Somatic, Material",
      duration: "Instantaneous",
    },
    {
      name: "Absorb Elements",
      cost: "1 Reaction",
      roll: "DC 15 DEX",
      damage: [
        { level: "1", damage: "1d6 extra" },
        { level: "2", damage: "2d6 extra" },
        { level: "3", damage: "3d6 extra" },
        { level: "4", damage: "4d6 extra" },
      ],
      description: [
        "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
      ],
      casting_time: "1 Action.",
      range: "Self",
      components: "Somatic",
      duration: "1 Round",
    },
  ],
  weapon_proficiency: ["Martial", "Simple"],
  armor_proficiency: ["Light", "Medium", "Shields"],
  language_proficiency: ["Common", "Grung"],
  feats_and_traits: [
    {
      name: "Rage",
      description: [
        "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
        "- You have advantage on Strength checks and Strength saving throws.",
        "- When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
        "- You have Resistance to bludgeoning, piercing, and slashing damage.",
        "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
        "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
        "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.",
      ],
    },
    {
      name: "Danger Sense",
      description: [
        "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
      ],
    },
    {
      name: "Extra Attack",
      description: [
        "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
      ],
    },
    {
      name: "Fast Movement",
      description: [
        "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
      ],
    },
    {
      name: "Great Weapon Master",
      description: [
        "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
        "- On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
        "- Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
      ],
    },
    {
      name: "Reckless Attack",
      description: [
        "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
      ],
    },
    {
      name: "Storm Aura: Sea",
      description: [
        "When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.",
        "Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.",
        "If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
        "Sea. When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.",
      ],
    },
  ],
  items_and_equipment: [
    {
      name: "Clothes, traveler's",
      description: [],
    },
    {
      name: "Explorer's Pack",
      description: [],
    },
    {
      name: "Fishing tackle",
      description: [],
    },
    {
      name: "Pouch",
      description: [],
    },
    {
      name: "Greater Healing Potion",
      description: [],
    },
    {
      name: "Soulgaze Monacle",
      description: [],
    },
    {
      name: "Bottle of Boundless Coffee",
      description: [],
    },
    {
      name: "Heward's Spice Pouch",
      description: [],
    },
    {
      name: "Pole of Angling",
      description: [],
    },
    {
      name: "Bloodrage Greataxe",
      description: [
        "You gain a +2 bonus to attack and damage rolls made with this magic greataxe while you have half your hit points or fewer.",
      ],
    },
  ],
}
