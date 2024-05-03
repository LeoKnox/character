import { getCharacterInventory } from "./characterInventory.js";

let cd = {
  name: "Aelien",
  class: "Fighter",
  atk: 10,
  def: 10,
  inventory: getCharacterInventory(),
};

export const getName = <h1>{cd.name}</h1>;

export const getClass = cd.class;

export const getInventory = cd.inventory;

export const getAtk = cd.atk;

export const editAtk = (newStat) => {
  cd.atk = newStat;
};

export const attackAlpha = (factor) => {
  return cd.atk * factor;
};
