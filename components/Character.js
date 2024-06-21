import { useState } from "react";
import { CharacterSummary } from "./CharacterSummary.js";
import { CharacterMenu } from "./CharacterMenu.js";
import { characterStats } from "./characterData.js";

export default Character = () => {
  const [characterHealth, setChacterHealth] = useState(characterStats.hp);
  return (
    <>
      <h3>character Summary</h3>
      <CharacterSummary
        health={characterHealth}
        name={characterStats.name}
        level={characterStats.level}
        hp={characterStats.hp}
      />
      <CharacterMenu
        onAttack={() => console.log("attack")}
        onMagic={() => console.log("magic")}
        onHeal={() => console.log("heal")}
      />
    </>
  );
};
