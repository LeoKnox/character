import { useState, useEffect } from "react";
import { CharacterSummary } from "./CharacterSummary.js";
import { CharacterMenu } from "./CharacterMenu.js";
import { mobStats, mobhp } from "./monsterData.js";
import {
  characterStats,
  characterAtttack,
  characterMagic,
  characterHeal,
} from "./characterData.js";

export default Character = () => {
  const [characterHealth, setCharacterHealth] = useState(
    characterStats.hp - 30
  );
  const [damageDone, setDamageDone] = useState([]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 2; i++) {
      newArray.push(mobhp);
    }
    setDamageDone(newArray);
    console.log(`damage done ${damageDone[1]}`);
  }, []);
  return (
    <>
      <h3>character Summary</h3>
      <p>
        Monster Health: {damageDone[0]}:{damageDone[1]}
      </p>
      <CharacterSummary
        health={characterHealth}
        name={characterStats.name}
        level={characterStats.level}
        hp={characterStats.hp}
      />
      <CharacterMenu
        onAttack={() =>
          setDamageDone(characterAtttack(damageDone, characterStats))
        }
        onMagic={() =>
          setDamageDone(characterMagic(damageDone, characterStats))
        }
        onHeal={() =>
          setCharacterHealth(characterHeal(damageDone, characterHealth))
        }
      />
    </>
  );
};
