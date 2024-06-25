import { useState } from "react";
import { CharacterSummary } from "./CharacterSummary.js";
import { CharacterMenu } from "./CharacterMenu.js";
import {
  characterStats,
  characterAtttack,
  characterMagic,
  characterHeal,
} from "./characterData.js";

export default Character = () => {
  const [characterHealth, setCharacterHealth] = useState(characterStats.hp);
  const [damageDone, setDamageDone] = useState(0);
  return (
    <>
      <h3>character Summary</h3>
      <p>Damage Done: {damageDone}</p>
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
          setCharacterHealth(characterHeal(damageDone, characterStats))
        }
      />
    </>
  );
};
