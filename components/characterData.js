import { getCharacterInventory } from "./characterInventory.js";

let cd = {
  name: "Aelien",
  class: "Fighter",
  atk: 10,
  def: 10,
  inventory: getCharacterInventory(),
};

export const getName = () => {
  return cd.name;
};

export const getClass = () => {
  return cd.class;
};

export const getInventory = () => {
  return cd.inventory;
};
