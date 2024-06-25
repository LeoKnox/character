import { getCharacterInventory } from "./characterInventory.js";
import { useState } from "react";

let hpt = 15;

let cd = {
  name: "Aelien",
  class: "Fighter",
  atk: 10,
  def: 10,
  inventory: getCharacterInventory(),
  hp: <p>HP: {hpt}</p>,
};

export const getName = <h1>{cd.name}</h1>;

export const getClass = cd.class;

export const getInventory = cd.inventory;

export const getAtk = cd.atk;

export const editAtk = (newStat) => {
  console.log(`new state: ${newStat}`);
  hpt = newStat;
};

export const attackAlpha = (factor) => {
  cd.atk * factor;
};

export const getHp = cd.hp;

export const characterStats = {
  name: "Ao",
  level: 6,
  hp: 89,
  attack: 30,
  magic: 10,
  defense: 20,
  magicdefense: 20,
};
export const characterAtttack = (damageDone, attacker) => {
  console.log(`receiver ${damageDone}`);
  const damageReceived =
    // attacker.attack = (attacker.level - receiver.level)* 1.25
    characterStats.attack - 27;
  const newHealth = damageDone + damageReceived;
  return newHealth;
};

export const characterMagic = (damageDone, attacker) => {
  console.log(`receiver ${damageDone}`);
  const damageReceived =
    // attacker.attack = (attacker.level - receiver.level)* 1.25
    characterStats.magic - 6;
  const newHealth = damageDone + damageReceived;
  return newHealth;
};
