import { sword } from "./weaponData.js";
let inventory = {
  weapons: ["axe", sword],
  pack: ["rations", "rope", "wine", "map"],
};

export const getCharacterInventory = () => {
  return inventory;
};
