import { useState } from "react";
import { CharacterSummary } from "./CharacterSummary.js";
import { characterStats } from "./characterData.js";

export default Character = () => {
  const [characterHealth, setChacterHealth] = useState(characterStats.hp);
  return (
    <>
      <h3>ttt</h3>
      <CharacterSummary hp={characterHealth} />
    </>
  );
};
