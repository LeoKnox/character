import { getCharacterInventory } from "./characterInventory.js";

let cd = {
  name: "Aelien",
  class: "Fighter",
  atk: 10,
  def: 10,
  inventory: getCharacterInventory(),
};

export const getName = cd.name;

export const getClass = cd.class;

export const getInventory = cd.inventory;
