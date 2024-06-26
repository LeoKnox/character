import { useState } from "react";
import { CharacterSummary } from "./CharacterSummary.js";
import { CharacterMenu } from "./CharacterMenu.js";
import { mobStats } from "./monsterData.js";
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
  for (let i = 0; i < 2; i++) {
    setDamageDone([...damageDone, mobStats.hp + i]);
  }
  return (
    <>
      <h3>character Summary</h3>
      <p>Monster Health: {damageDone[1]}</p>
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
