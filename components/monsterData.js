export const mobStats = {
  name: "Aka",
  level: 8,
  hp: 49,
  attack: 20,
  magic: 5,
  defense: 18,
  magicdefense: 7,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const modifier = () => {
  let x = getRandomInt(8);
  return getRandomInt(8);
};

export const mobhp = modifier();
