import { getCharacterInventory } from "./characterInventory.js";
import { useState } from "react";

let cd = {
  name: "Aelien",
  class: "Fighter",
  atk: 10,
  def: 10,
  inventory: getCharacterInventory(),
  hp: <p>HP: 20</p>,
};

export const getName = <h1>{cd.name}</h1>;

export const getClass = cd.class;

export const getInventory = cd.inventory;

export const getAtk = cd.atk;

export const editAtk = (newStat) => {
  console.log(`new state: ${newStat}`);
  return (cd.atk = newStat);
};

export const attackAlpha = (factor) => {
  return cd.atk * factor;
};

export const getHp = cd.hp;
