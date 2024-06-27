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

const damageEight = Math.floor(Math.random() * 8);

export const modifier = (mobNum) => {
  let x = getRandomInt(8);
  let newArr = [];
  //return damageEight;
  for (let i = 0; i < mobNum; i++) {
    newArr.push(getRandomInt(8));
  }
  return newArr;
};

export const mobhp = modifier();
