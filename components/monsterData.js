export const mobStats = {
  name: "Aka",
  level: 8,
  hp: 49,
  attack: 20,
  magic: 5,
  defense: 18,
  magicdefense: 7,
};

const modifier = () => {
  return mobStats.hp + Math.floor(Math.random() * 8);
};

export const mobhp = modifier();
